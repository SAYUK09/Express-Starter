const winston = require("winston");

const options = {
  file: {
    level: "info",
    filename: "./logs/app.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "info", //Only level more important than info will be consoled
    handleExceptions: true,
  },
};

const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    //   will log information to app.log file.
    // new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
      (data) => `${data.timestamp} ${data.level}: ${data.message}  `
    )
  ),
  exitOnError: false,
});

module.exports = logger;
