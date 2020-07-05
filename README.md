# react-theme-switcher
A dark-light theme switcher for React applications

![React Theme Switch](public/react-theme-switch.gif)

### Directory structure
```src
---- components  // all react components
-------- shared  // shared react components
---- locale      // translation files
-------- en.json // english translations
-------- jp.json // japanese translations
...
---- providers   // providers, custom hooks and HoC
---- App.css     // app styles
---- App.js      // App component
---- i18n.js     // is the i18next library configuration and initialization point
---- index.js    // is the JavaScript entry point
```


### Installation
1. Install dependencies

    `npm install`

2. Run the app locally

    `yarn start`

Runs the app in the development mode.  
Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### Deployment

    yarn build

Builds the app for production to the  `build`  folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

### Bonus Feature:
Internationalization provides following features:
- detect the user language
- load the translations
- optionally cache the translations
- flexibility to use other packages eg: moment.js for date formatting
- scalability — option to separate translations into multiple files and to load them on demand
