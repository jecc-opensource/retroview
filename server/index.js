/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const api = require('./routes/api');

const PORT = process.env.EXPRESS_PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all requests
app.use((req, res, next) => {
  console.log(`server/app.js: received request ${req.method} ${req.url}`);
  next();
});

// Serve the client build
app.use('/build', express.static(path.resolve(__dirname, '../build')));

// Handle API calls via api router
app.use('/api', api);

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/', 'index.html'));
});

// Default 404 handler
app.use((req, res) => {
  console.log(`server/app.js: handler not found for request ${req.method} ${req.url}`);
  res
    .status(404)
    .send(
      'Page not found',
    );
});

// Global error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const defaultErr = {
    message: { err: 'An error occurred' },
    log: 'Express error handler caught unknown middleware error',
    status: 400,
  };
  const errObj = Object.assign(defaultErr, err);
  console.log('ErrorObject Log: ', errObj.log);
  res.status(errObj.status).send(errObj.message);
});

// Fire it up
module.exports = app.listen(PORT, () => {
  console.log(`Express Node server listening on ${PORT}`);
});
