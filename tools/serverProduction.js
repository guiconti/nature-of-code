'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const noCacheOptions = {
  etag: true, // Just being explicit about the default.
  lastModified: true, // Just being explicit about the default.
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      // All of the project's HTML files end in .html
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
};

app.use('/', express.static('dist', noCacheOptions));
app.use(
  [
    '*',
    '/*',
    '*/',
    '*/*'
  ],
  express.static('dist/index.html', noCacheOptions)
);

module.exports = app;