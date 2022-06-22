export const responsiveView = {
  hdpc: '1200px',
  pc: '980px',
  tablet: '768px',
  tabletSM: '650px',
  mobile: '480px',
  mobileSM: '400px',
  mobileFold: '320px',
};

const publicTheme = {
  mq: {
    mobile: `(max-width: ${responsiveView.mobile})`,
    tablet: `(max-width: ${responsiveView.tablet})`,
    tabletSM: `(max-width: ${responsiveView.tabletSM})`,
    PC: `(max-width: ${responsiveView.pc})`,
    HDPC: `(max-width: ${responsiveView.hdpc})`,
    mobile_SM: `(max-width: ${responsiveView.mobileSM})`,
    mobile_FOLD: `(max-width: ${responsiveView.mobileFold})`,
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
    primary: '#A4E697',
    primaryVariant: '#11CB0E',
    secondary: '#E48DBF',
    error: '#D34851',
    background: '#121212',
    surface: '#323232',
  },
};

export const darkTheme = {
  ...publicTheme,
  color: {
    primary: '#A4E697',
    primaryVariant: '#11CB0E',
    secondary: '#E48DBF',
    error: '#CF6679',
    background: '#121212',
    surface: '#323232',
    onPrimary: '#151515',
    onSecondary: '#1c1c1c',
    onError: '#181818',
    onBackground: '#FCFCFC',
    onSurface: '#FEFEFE',
    onBackgroundSub: '#949494',
    disable: '#7f7f7f',
  },
};
