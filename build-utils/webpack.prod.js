const path = require('path');
const Dotenv = require('dotenv-webpack');

// Webkit prod env configuration
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.production'),
    }),
  ],
};
