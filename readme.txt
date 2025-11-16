SEED
node seed/authorsSeeder.js
node seed/quotesSeeder.js



Routes

FOR QUOTES
GET     /api/v1/quotes                → Get all quotes (protected by auth)
GET     /api/v1/quotes/quotebyid/:id  → Get a single quote by its ID
GET     /api/v1/quotes/byauthor/:authorID → Get all quotes by a specific author
GET     /api/v1/quotes/randomquote    → Get a random quote
POST    /api/v1/quotes                → Create a new quote
DELETE  /api/v1/quotes/:id            → Delete a quote by ID

FOR AUTHORS
📌 Authors Router (/api/v1/authors)
GET     /api/v1/authors                       → Get all authors
GET     /api/v1/authors/authorbyid/:authorID  → Get a single author by ID
POST    /api/v1/authors                       → Create a new author
DELETE  /api/v1/authors/:id                   → Delete an author by ID
PUT     /api/v1/authors/authorbyid/:authorID  → Update an author by ID

FOR QUOTESBYOTHERS
📌 QuotesByOther Router (/api/v1/quotesbyother)
GET     /api/v1/quotesbyother/uploader/:uploaderName → Get all quotes uploaded by a given uploader (string name)
POST    /api/v1/quotesbyother                        → Create a quote (by uploader name)
GET     /api/v1/quotesbyother/uploaders              → Get all uploaders
POST    /api/v1/quotesbyother/uploaders              → Create a new uploader


FOR USERS
GET     /api/v1/users/signup  → Get all users   (⚠️ naming is confusing: GET /signup is not standard REST)
POST    /api/v1/users/signup  → Register new user
POST    /api/v1/users/signin  → Log in user