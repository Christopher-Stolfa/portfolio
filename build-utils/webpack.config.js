const { merge } = require('webpack-merge');

// Contains the config used by webpack in both dev and prod
const commonConfig = require('./webpack.common.js');

// This config export merges the env specific webkit config with the common config
module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
