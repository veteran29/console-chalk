var logger = require('./lib/console-chalk');

// Replacement for standard console logging functions
logger.log('log');
logger.info('info', 'log');
logger.debug('debug');
logger.warn('warn', 'some warning!');
logger.error('error', { error: 'catastrophic failure!' });

// Bonus stuff
logger.success('example script finished succesfully.')