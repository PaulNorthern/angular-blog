// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Enviroment} from "./interface";

export const environment: Enviroment = {
  production: false,
  apiKey: 'AIzaSyAYjxRj7yBreV-6vbJCnefK5I3WzWCKuL0',
  fbDbUrl: 'https://angular-blog-a40d3-default-rtdb.europe-west1.firebasedatabase.app'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
