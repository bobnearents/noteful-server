'use strict';

module.exports = {
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'https://viva-mexico.now.sh',
  // CLIENT_ORIGIN : 'http://localhost:3000',
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || 'postgresql://postgres@localhost/noteful'
}