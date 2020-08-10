// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  localDB:"http://localhost:3000/",
   firebaseConfig:{
    apiKey: "AIzaSyAex3pXTZlWxYZWo1BDKoyJSgfWjkvgDhQ",
    authDomain: "angularschool-87884.firebaseapp.com",
    databaseURL: "https://angularschool-87884.firebaseio.com",
    projectId: "angularschool-87884",
    storageBucket: "angularschool-87884.appspot.com",
    messagingSenderId: "717054971093",
    appId: "1:717054971093:web:97345d688421ee3757265c",
    measurementId: "G-HGXRJMDBPW"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
