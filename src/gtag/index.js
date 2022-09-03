const GA_TRACKING_ID = 'G-MFWV002LGZ';

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const emit = (event, params) => window.gtag('event', event, params);
