const chalk = require('chalk');

const colorizedLog = (chalkFnc, args) => {
    console.log(
        chalkFnc(...args.map((x) => {
            return typeof x === "string" ? x : JSON.stringify(x);
        }))
    );
};

module.exports = {

    log: (...args) => {
        colorizedLog(chalk.white, args);
    },

    debug: (...args) => {
        colorizedLog(chalk.cyan.bold, args);
    },

    info: (...args) => {
        colorizedLog(chalk.white.bold.bgBlue, args);
    },

    warn: (...args) => {
        colorizedLog(chalk.black.bgYellow, args);
    },

    error: (...args) => {
        colorizedLog(chalk.white.bold.bgRed, args);
    },

    success: (...args) => {
        colorizedLog(chalk.black.bgGreen, args);
    },
}
