const winston = require('winston');
// Logger configuration
const logConfiguration = {
  transports: [
    new winston.transports.File({
      filename: './logs/error.log'
    })
  ]
};
// Create the logger
const logger = winston.createLogger(logConfiguration);
module.exports = { logger };
