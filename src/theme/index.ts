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
  header: {
    height: '58px',
  },
  icon: {
    size: {
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '32px',
      xxl: '48px',
    },
  },
  mq: {
    hdpc: `(max-width: ${responsiveView.HDPC})`,
    pc: `(max-width: ${responsiveView.PC})`,
    tablet: `(max-width: ${responsiveView.TABLET})`,
    tabletSM: `(max-width: ${responsiveView.TABLET_SM})`,
    mobile: `(max-width: ${responsiveView.MOBILE})`,
    mobileSM: `(max-width: ${responsiveView.MOBILE_SM})`,
    mobileFold: `(max-width: ${responsiveView.MOBILE_FOLD})`,
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
    captionRegular: {
      element: 'p',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
    },
    captionBold: {
      element: 'p',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '18px',
    },
    captionSmallRegular: {
      element: 'p',
      fontSize: '10px',
      fontWeight: '400',
      lineHeight: '14px',
    },
    captionSmallBold: {
      element: 'p',
      fontSize: '10px',
      fontWeight: '700',
      lineHeight: '14px',
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
    surface: '#FCFCFC ',
  },
};

export const darkTheme = {
  ...publicTheme,
  color: {
    primary: '#76E4CB',
    primaryVariant: '#00bd95',
    secondary: '#E48DBF',
    error: '#CF6679',
    background: '#121212',
    surface: '#2f2f2f',
    onPrimary: '#151515',
    onSecondary: '#1c1c1c',
    onError: '#181818',
    onBackground: '#FCFCFC',
    onSurface: '#FEFEFE',
    onBackgroundSub: '#949494',
    disable: '#7f7f7f',
    discord: '#5865F2',
    kakao: '#FEE500',
    naver: '#03C75A',
    linkShare: '#7BD0BD',
    otherShare: '#999A9A',
    eventYellow: '#E0D145',
  },
};
