const express = require("express");
const cors = require("cors");
const compression = require("compression");
const rateLimit = require("express-rate-limit");

const quotesRouter = require("./routers/quotes");
const authorsRouter = require("./routers/authors");
const usersRouter = require("./routers/users");
const reviewsRouter = require("./routers/reviews");
const quotesByOtherRouter = require("./routers/quotesByOther");
const globalErrorHandler = require("./controllers/errorHandler");
const CustomError = require("./utilities/CustomError");

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: "fail", message: "Too many requests, please try again after 15 minutes." },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: "fail", message: "Too many login attempts, please try again after 15 minutes." },
});

// 1) Middleware
app.use(compression());
app.use(express.json());

// For Front-end Connections
app.use(
  cors({
    origin: "http://localhost:3000", // allow React dev server
    methods: ["GET", "POST"],
  }),
);

// 2) Adding Routes
app.use("/api/v1/quotes", apiLimiter, quotesRouter);
app.use("/api/v1/authors", apiLimiter, authorsRouter);

// QuotesByOther -- except admin, this router will be used to store quotes uploaded by Friends.
app.use("/api/v1/quotesbyother", apiLimiter, quotesByOtherRouter);

app.use("/api/v1/users", authLimiter, usersRouter);

// For Reviews
app.use("/api/v1/reviews", apiLimiter, reviewsRouter);

app.use((req, res, next) => {
  const err = new CustomError(
    `Cannot find the url ${req.originalUrl} in the server`,
    404,
  );
  console.log("From here");
  next(err);
});

app.use(globalErrorHandler);
module.exports = app;
