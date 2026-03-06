const express = require("express");
const path = require("path");
const cors = require("cors");

const quotesRouter = require("./routers/quotes");
const authorsRouter = require("./routers/authors");
const usersRouter = require("./routers/users");
const reviewsRouter = require("./routers/reviews");
const quotesByOtherRouter = require("./routers/quotesByOther");
const globalErrorHandler = require("./controllers/errorHandler");
const CustomError = require("./utilities/CustomError");

const app = express();

// serve frontend static assets from public/
app.use(express.static(path.join(__dirname, "public")));

// 1) Middleware
app.use(express.json());

// For Front-end Connections
app.use(
  cors({
    origin: "http://localhost:3000", // allow React dev server
    methods: ["GET", "POST"],
  }),
);

// 2) Adding Routes
app.use("/api/v1/quotes", quotesRouter);
app.use("/api/v1/authors", authorsRouter);

// QuotesByOther -- except admin, this router will be used to store quotes uploaded by Friends.
app.use("/api/v1/quotesbyother", quotesByOtherRouter);

app.use("/api/v1/users", usersRouter);

// For Reviews
app.use("/api/v1/reviews", reviewsRouter);

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
