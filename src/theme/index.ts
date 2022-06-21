export const responsiveView = {
  HDPC: '1200px',
  PC: '980px',
  TABLET: '768px',
  TABLET_SM: '650px',
  MOBILE: '480px',
  MOBILE_SM: '400px',
  MOBILE_FOLD: '320px',
};

const publicTheme = {
  mq: {
    MOBILE: `(max-width: ${responsiveView.MOBILE})`,
    TABLET: `(max-width: ${responsiveView.TABLET})`,
    TABLET_SM: `(max-width: ${responsiveView.TABLET_SM})`,
    PC: `(max-width: ${responsiveView.PC})`,
    HDPC: `(max-width: ${responsiveView.HDPC})`,
    MOBILE_SM: `(max-width: ${responsiveView.MOBILE_SM})`,
    MOBILE_FOLD: `(max-width: ${responsiveView.MOBILE_FOLD})`,
  },
  typography: {
    h1: {
      element: 'h1',
      fontSize: '40px',
      fontWeight: '700',
      lineHeight: '52px',
    },
    h2: {
      element: 'h2',
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '42px',
    },
    h3: {
      element: 'h3',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '30px',
    },
    h4: {
      element: 'h4',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '18px',
    },
    body1: {
      element: 'p',
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '24px',
    },
    body2: {
      element: 'p',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '24px',
    },
    body3: {
      element: 'p',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
    },
    body4: {
      element: 'p',
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '20px',
    },
    caption: {
      element: 'p',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
    },
  },
};

export const lightTheme = {
  ...publicTheme,
  color: {
    PRIMARY: '#A4E697',
    PRIMARY_VARIANT: '#11CB0E',
    SECONDARY: '#E48DBF',
    ERROR: '#D34851',
    BACKGROUND: '#121212',
    SURFACE: '#323232',
  },
};

export const darkTheme = {
  ...publicTheme,
  color: {
    PRIMARY: '#A4E697',
    PRIMARY_VARIANT: '#11CB0E',
    SECONDARY: '#E48DBF',
    ERROR: '#CF6679',
    BACKGROUND: '#121212',
    SURFACE: '#323232',
    ON_PRIMARY: '#151515',
    ON_SECONDARY: '#1c1c1c',
    ON_ERROR: '#181818',
    ON_BACKGROUND: '#FCFCFC',
    ON_SURfACE: '#FEFEFE',
    SUB_ON_BACKGROUND: '#949494',
    DISABLE: '#7f7f7f',
  },
};
