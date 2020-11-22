const withImages = require("next-images");
const withBabelMinify = require("next-babel-minify");
const withPlugins = require("next-compose-plugins");
const withProgressBar = require("next-progressbar");
// const withCSS = require('@zeit/next-css')

// module.exports = withImages();

const nextConfigs = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    config.plugins = [...config.plugins];
    return config;
  },
  target: "serverless",
};
module.exports = withPlugins(
  [
    // plugin to import css
    // withCSS({
    //     cssModules: true
    // }),
    withBabelMinify(),

    withImages(),
  ],
  nextConfigs
);
