if (typeof window === 'undefined') {
  const { server } = require('./server');
  server.listen({
    warnOnUncaptured: false,
  });
} else {
  const { worker } = require('./browser');
  worker.start({
    // onUnhandledRequest(request: MockedRequest, print: any) {
    //   if (request.url.pathname.startsWith('/_next')) {
    //     return;
    //   }

    //   print.warning();
    // },
    warnOnUncaptured: false,
    quiet: true,
  });
}

// eslint-disable-next-line prettier/prettier
export {};
