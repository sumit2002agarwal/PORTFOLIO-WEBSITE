
# PERSONAL PORTFOLIO WEBSITE

This is a static responsive website built using React JS  during the process of learning development and as a project for IEEE LEAD 3.0. 



This project is deployed at https://sumitportfolio2003.netlify.app/.
\
\
I tried to include varoius animations depending on the visibility of a particular page using TrackVisibility from 'react-on-screen' module.

To make the project user-interactive I tried to fetch the codeforces stats for users using Axios to fetch data from cf api.
If a wrong id is entered it would display the appropriate message otherwise it would show the current stats of users.


## Tech Stack


Built using:

- Front-end library: React
- CSS framework: React-bootstrap
- CSS animations library: Animate.css


# Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
## API Reference


#### Get item

```http
 https://codeforces.com/api/user.info
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `handles`      | `string` | **Required**.  |



## Authors

- [@sumit2002agarwal](https://www.github.com/sumit2002agarwal)



