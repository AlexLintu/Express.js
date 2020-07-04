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
9. Create a `server.js` and add Express server into it with at least one route
10. `npm run server` to run the script we created that runs and watches the `server.js`
    (Runs on: http://localhost:5000/api/users)

Frontend:

11. In a separate terminal run `npx create-react-app client` to create a client side
12. Update client's `package.json` to add `"proxy": "http://localhost:5000"` linking client to the backend
13. `cd` into `client` directory
14. Start rect app `npm start`
    (Runs on: http://localhost:3000/)
15. Create `components` directory and components making a get request to the Express server

Backend:

16. Add new scripts in `package.json` (server level) to run server and client simultaneously `"client": "npm start --prefix client" "dev": "concurrently \"npm run server\" \"npm run client\""`
17. Run `npm run dev` to have both backend and frontend servers run at the same time

Frontend:

18. Add `Sass` by running `npm install node-sass --save`
19. Update all `.css` extensions to `.scss`
20. Run the app to make sure everything is working as expected
    (BEM: https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/
    Sass: https://sass-lang.com/documentation/variables)
21. Add `uuid` dependency by running `npm i uuid --save` to generate unique ids for the POST/DELETE requests

## Stack:

Backend:

- JavaScript
- Node.js Express.js
- REST API
- JSON
- Main Dependencies: concurrently (https://www.npmjs.com/package/concurrently)
- Dev Dependencies: nodemon (https://www.npmjs.com/package/nodemon)

Frontend:

- JavaScript
- React.js
- fetch API
- Sass (.scss)
- uuid: https://www.npmjs.com/package/uuid
