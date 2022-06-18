import { MockedRequest } from 'msw';

/* eslint-disable global-require */
if (typeof window === 'undefined') {
  const { server } = require('./server');
  server.listen();
} else {
  const { worker } = require('./browser');
  worker.start({
    onUnhandledRequest(request: MockedRequest, print: any) {
      if (request.url.pathname.startsWith('/_next')) {
        return;
      }

      print.warning();
    },
  });
}

// eslint-disable-next-line prettier/prettier
export { };
