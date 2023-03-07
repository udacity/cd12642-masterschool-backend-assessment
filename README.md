# Backend Assessment

## Introduction

**Welcome to the Backend Assessment!**

This assessment is designed to help you practice the skills and knowledge you have acquired from the _WD-107 Backend course_. You will be building a `Node.js` `Express` `MongoDB` application to make API endpoints and combine data from the [Unsplash API](https://unsplash.com/documentation). You will create simple and complex `GET` routes, as well as full `CRUD` functionality for a `favoriteUsers` collection. You will also need to connect your app to a `MongoDB` database, and create a full login system with Authentication using `JWT`.

To complete this assessment, complete every task in **Parts I** through **VII** outlined below.

**Requirements to Pass**

- All routes must return the correct status code and data.
- Routes, controllers, models, middleware, etc. must be created in the appropriate files and folders.
- In `Part I` through `III`, `async/await` and `try/catch` blocks must be used to make requests and handle errors rather than promise chaining.
- Errors must be handled and returned to the user.
- The `db.js` file must be set up correctly.
- The `MongoDB` database must be set up correctly.
- The login system must be secured using `JWT`.
- Your code must be clean and readable. It should follow the DRY principle.
- Routes created in **Part VI** should be accessed only by users who are logged in.
- Error handling middleware is implemented for all `favorites` routes (created in **Part VI**).
- Auth middleware is implemented for all `favorites` routes (created in **Part VI**).

**Important Note(s)**

- Use [axios](https://www.npmjs.com/package/axios) to make requests to the [Unsplash API](https://unsplash.com/documentation).
- Save all sensitive passwords and keys to an `.env` file.
- Upon completing this assessment, submit your Github repo link and the `.env` file.

**Documentation**

- [Postman documentation](https://learning.postman.com/docs/getting-started/introduction/)
- [axios documentation](https://www.npmjs.com/package/axios)
- [Express documentation](https://expressjs.com/en/4x/api.html)
- [Unsplash API](https://unsplash.com/documentation)
- [MongoDB](https://www.mongodb.com/docs/)
- [Mongoose](https://mongoosejs.com/docs/guide.html)
- [JWT](https://jwt.io/introduction)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)

**Downloads**

- [Download Compass](https://www.mongodb.com/try/download/compass) to view your MongoDB database.
- [Download Postman](https://www.postman.com/downloads/) to test your API endpoints.

**BEFORE YOU START YOUR PROJECT**

Before you start, set up your **Developer** account on **Unsplash** and create an application. You will need to create an application to get your API key. You can find the documentation for the Unsplash API [here](https://unsplash.com/documentation).

- [ ] Create a **Developer** account on [Unsplash](https://unsplash.com/developers).
- [ ] Create a new application called BE Assessment.
- [ ] Copy your **Access Key** and your **Secret Key** and save them to your `.env` file as `UNSPLASH_ACCESS_KEY` and `UNSPLASH_SECRET_KEY` respectively.

### Part I - Setup Instructions

**Set up your project by following the instructions below.**

- [v] Fork and clone this repository.
- [v] Run `npm install` to install dependencies.
- [v] Run `npm run server` to start the server w/ `nodemon`.
- [v] Create a `.gitignore` file and add `node_modules` and `.env` to it.
- [v] Create a `.env` file and add `PORT=3000` to it.
- [v] Set up the `app.js` file:
  - [v] Require the `express` module
  - [v] Set up the `app` object
  - [v] Set the `port` to `3000`
  - [v] Set up the `app` object to use `express.json()` middleware to parse JSON bodies
  - [v] Add a `GET` route to `/` that returns a `200` status and a JSON object with a `message` key assigned to a string that reads, `"Welcome to the Unsplash API!"`
  - [v] Set up the server to listen on port `3000`.
  - [v] Run your server with `npm run server`
  - [v] Check that your server is running:
    - [v] You should see your `"Listening on port 3000"` log in the terminal.
    - [v] When you visit `http://localhost:3000/` in your browser, you should see a JSON object, `{message: "Welcome to the Unsplash API!"}`.

**Commit to Github**

- [v] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part I - Setup"`.

### Part II - API GET Routes: Return Unsplash Photos

**Create the following `GET` routes in the `photoRoutes.js` file:**

- [v] Use `/api/photos` as the base path for all photo routes

**`/api/photos` Route**

Create a `GET`route in the `photoRoutes.js` file that:

- [v] Returns an array of **raw** **Unsplash** photo URLs.
- [v] If the `catch` block is triggered, returns a `500` status and a JSON object with a `message` key assigned to a string that reads, `"Server error. Please try again later."`

**`/api/photos/:id` Route**

Create a `GET`route in the `photoRoutes.js` file that:

- [v] Returns a single photo object from the Unsplash API based on a photo's `id`
- [v] If the `catch` block is triggered, returns a `500` status and a JSON object with a `message` key assigned to a string that reads, `"Server error. Please try again later."`

**Commit to Github**

- [v] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part II - API GET Routes: Return Unsplash Photos"`.

### Part III - Advanced Route: Return Combined Data

**`/api/photos/user/:username` Route**

Create a `GET`route in the `photoRoutes.js` file that:

- [v] Returns an array of a user's **Unsplash** photos based on a `username` parameter.
  - [v] The array of photos should be an array of objects with the following keys:
    - [v] `id` - photo's id
    - [v] `username` - the `username` of the `user` who added the photo
    - [v] `description` - photo's description
    - [v] `url` - photo's raw URL
    - [v] if the `description` is `null`, the `description` key should be assigned to a string that reads, `"No description provided."`
- [v] If the `catch` block is triggered, it returns the error `status` and a JSON object with a `message` key assigned to the error message contained in the `axios` error response data. Use [Axios Response Schema documentation](https://axios-http.com/docs/res_schema) as needed.

**Commit to Github**

- [v] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part III - Advanced Routes: Return Combined Data"`.

### Part IV - Set up MongoDB and connect to your application

- [v] Set up a `MongoDB` database
- [v] Connect it to your application.
- [v] Add the `MONGO_URI` to your `.env` file

### Part V - Authentication

**Create Authentication using `JWT`:**

- [v] Create a `User` model that has the following properties:

  - [v] `username` - a string
  - [v] `password` - a string
  - [v] `email` - a string
  - [v] Set all properties to required
  - [v] Make sure that the `email` is unique
  - [v] Include a timestamp

- [v] Create a `register` route where users can sign up for your application
  - [v] All passwords should be hashed using `bcryptjs` and **10 salt rounds**
  - [v] Make sure that the user's `email` is unique
  - [v] If the user's `email` is not unique, return a `400` status and a JSON object with a `message` key assigned to a string that reads, `"Email already exists."`
- [v] Create a `login` route where users can sign in
  - [v] `login` route should compare the hashed password to the password in the user request and returns a `JWT token`
- [v] Create a `logout` route that invalidates the `JWT token`
- [v] Create the `JWT token` using `jsonwebtoken`
- [v] Create a middleware that checks for the `JWT token` and verifies it
- [v] Create a private `/me` route that returns the user's information based on the `JWT token`
- [v] Store the `JWT_SECRET` in your `.env` file

**Commit to Github**

- [v] Commit your work to Github and push to your forked repository w/ a commit message that reads, `"Part VI - Authentication"`.

### Part VI - Collection of Favorite Photos

**Note:** All functionality in this section should only be accessed by authenticated users.

- [v] Implement `asyncHandler` to avoid `try/catch` blocks and to trigger error handling middleware (error middleware to be completed in **Part VII**)
- [v] Create a new collection in your database called `favoritePhotos`
- [v] Create a `model` for your `favoritePhotos` collection with a schema that includes the following:
  - [v] `user` - the authenticated `unsplash-backend-assessment` user's `id`
  - [v] `url` - the photo's raw url
  - [v] `description` - the photo's description
  - [v] `username` - the **Unsplash** user's `username` associated with the photo url
- [v] Create a route that allows a user to add a photo's `url`, `description`, and **Unsplash** user's `username` as well as an `explanation` of why they added the photo to their `favoritePhotos` collection
- [v] Create a route that allows a user to `get` all of their `favoritePhotos`
- [v] Create a route that allows a user to `remove` a photo from their `favoritePhotos`
- [v] Create a route that allows a user to `edit` their `description` of why they added the photo to their list of `favorites`

**Commit to Github**

- [v] Commit your work to Github and push to your repository w/ a commit message that reads, `"Part VII - Favorites Collection"`

### Part VII - Error Handling Middleware

**Create an `errorHandler` function in the `errorMiddleware.js` file that:**

- [v] Responds with a `statusCode` and error `message`
- [v] Returns the `stack` trace only if the environment is in `development`
- [v] Implement the `errorHandler` function in your `app.js` file
- [v] Check that the `errorHandler` is working with all of the `favorites` routes created in **Part VI**. No need to implement for `photos` routes.

**Commit to Github**

- [v] Commit your work to Github and push to your repository w/ a commit message that reads, `"Part VII - Error Handling Middleware"`

### Pass in your assessment

- [ ] Ensure all routes work as expected
- [ ] Ensure that your code is readable and DRY
- [ ] Include the `.env` file
