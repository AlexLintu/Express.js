## Notes:

1. Create a root folder `express-and-react`
2. `cd` into the newly created folder
3. Create a `README` document
4. Create a `package.json` file by running `npm init`
5. Update `package.json`

Backend:

6. Install dependencies and add them to the `package.json` file by running `npm i express concurrently --save`. This will create `package-lock.json` file automatically
7. Install `npm i nodemon --save-dev` to update the app automatically
8. Add `scripts` to `package.json`
9. Create a `server.js` and add express server into it with at least one route
10. `npm run server` to run the script we created that runs and watches the `server.js`
    (Runs on: http://localhost:5000/api/users)

Frontend:

11. In a separate terminal run `npx create-react-app client` to create a client side
12. Update client's `package.json` to add `"proxy": "http://localhost:5000"` linking client to the backend
13. `cd` into `client` directory
14. Start rect app `npm start`
    (Runs on: http://localhost:3000/)
