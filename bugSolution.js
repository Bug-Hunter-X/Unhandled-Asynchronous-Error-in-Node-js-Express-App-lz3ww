const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Success!');
      } else {
        const error = new Error('Something went wrong!');
        // Using next(error) in Express will pass the error to the error handler middleware
        next(error);
      }
    } catch (error) {
      next(error);
    }
  }, 1000);
});
//Error handling middleware in Express
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});