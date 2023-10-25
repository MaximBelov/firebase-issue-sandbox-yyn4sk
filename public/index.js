import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

/**
 * Initialize Firebase
 *
 * NOTE: This will be publically visible
 * please don't accidentally publish your
 * actual production credentials here.
 * Create a sample project that mimics
 * your setup to reproduce the error.
 */
const app = initializeApp({
  apiKey: 'AIzaSyBNHCyZ-bpv-WA-HpXTmigJm2aq3z1kaH8',
  authDomain: 'jscore-sandbox-141b5.firebaseapp.com',
  databaseURL: 'https://jscore-sandbox-141b5.firebaseio.com',
  projectId: 'jscore-sandbox-141b5',
  storageBucket: 'jscore-sandbox-141b5.appspot.com',
  messagingSenderId: '280127633210',
});

const analytics = getAnalytics(app);
console.log(analytics);
// Reproduce Issue below
// ...
