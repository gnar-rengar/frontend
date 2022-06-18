/* eslint-disable global-require */
if (typeof window === 'undefined') {
  const { server } = require('./server');
  server.listen();
} else {
  const { worker } = require('./browser');
  worker.start();
}

// eslint-disable-next-line prettier/prettier
export { };
