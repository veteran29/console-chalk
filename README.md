# console-chalk

![console example](https://i.imgur.com/L3o3jAB.png)

This is simple wrapper around _chalk_ for console logging but with colours. Intended as replacement for `console.log` `console.warn` etc.

> TL;DR  
> `console.log` but with colours

## Usage

```javascript
var logger = require('console-chalk');

// Replacement for standard console logging functions
logger.log('log');
logger.info('info', 'log');
logger.debug('debug');
logger.warn('warn', 'some warning!');
logger.error('error', { error: 'catastrophic failure!' });

// Bonus stuff
logger.success('example script finished succesfully.')
```