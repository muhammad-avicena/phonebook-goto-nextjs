/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};

module.exports = config;
