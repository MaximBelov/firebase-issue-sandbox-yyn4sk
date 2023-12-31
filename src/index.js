import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

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
  apiKey: "AIzaSyBrhMtIYYu7C-hWwMGoForjuhkNSyBakPo",
  projectId: "stackblitztest-d3376",
  appId: "1:121906792905:web:8b9b4b3d0b207c85f48018",
  measurementId: "G-SCP40WKZE6"
});

const analytics = getAnalytics(app);
console.log(analytics);
// Reproduce Issue below
// ...
logEvent(analytics, 'notification_received');