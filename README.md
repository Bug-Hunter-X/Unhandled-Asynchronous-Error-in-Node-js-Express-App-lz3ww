# Unhandled Asynchronous Error in Node.js Express App

This repository demonstrates a common error in Node.js applications: unhandled errors within asynchronous callbacks.  The `bug.js` file contains code that simulates an asynchronous operation that might fail. If the operation fails, an error is thrown, but it's not caught, leading to a crash.

The `bugSolution.js` file provides a corrected version with proper error handling using a `try...catch` block or the `next` function in Express middleware.