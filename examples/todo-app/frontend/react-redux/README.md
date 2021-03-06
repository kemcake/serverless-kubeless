# React-Redux frontend

This is a frontend for our `todo` application which is implemented with the help of [React](http://reactjs.org) and [Redux](http://reduxjs.org).

Do the following to setup and use the frontend

1. Make sure that you've deployed the backend of the `todo` application
2. Run `npm install` to install the used npm packages
3. Go to `app/js/actions/index.js` and update the `API_URL` with the endpoint of your deployed `todo` Serverless service (e.g. `https://192.168.99.100`)
    * NOTE: Check the [known issue](../../README.md#known-issue) for web browsers and the self-signed certificate
4. Run `npm start`
5. Open up a browser on [localhost:8080](http://localhost:8080) and play around with the application
