import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mq: {
      hdpc: string;
      pc: string;
      tablet: string;
      tabletSM: string;
      mobile: string;
      mobileSM: string;
      mobileFold: string;
    };
    color: {
      primary: string;
      primaryVariant: string;
      secondary: string;
      error: string;
      background: string;
      surface: string;
      onPrimary: string;
      onSecondary: string;
      onError: string;
      onBackground: string;
      onSurface: string;
      onBackgroundSub: string;
      disable: string;
    };
    typography: {
      [key in 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'body3' | 'body4' | 'caption']: {
        element: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  }
}
