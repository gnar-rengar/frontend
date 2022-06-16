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
  MOBILE: `(max-width: ${responsiveView.MOBILE})`,
  TABLET: `(max-width: ${responsiveView.TABLET})`,
  TABLET_SM: `(max-width: ${responsiveView.TABLET_SM})`,
  PC: `(max-width: ${responsiveView.PC})`,
  HDPC: `(max-width: ${responsiveView.HDPC})`,
  MOBILE_SM: `(max-width: ${responsiveView.MOBILE_SM})`,
  MOBILE_FOLD: `(max-width: ${responsiveView.MOBILE_FOLD})`,
};

export const lightTheme = {
  ...publicTheme,
  PRIMARY: '#A4E697',
  PRIMARY_VARIANT: '#11CB0E',
  SECONDARY: '#E48DBF',
  ERROR: '#D34851',
  BACKGROUND: '#121212',
  SURFACE: '#323232',
};

export const darkTheme = {
  ...publicTheme,
  PRIMARY: '#151515',
  PRIMARY_VARIANT: '#151515',
  SECONDARY: '#1C1C1C',
  ERROR: '#181818',
  BACKGROUND: '#FCFCFC',
  SURFACE: '#FEFEFE',
};
