import '@emotion/react';

import type { ColorVariant, TypographyVariant } from './theme.type';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      [key in ColorVariant]: string;
    };
    header: {
      height: string;
    };
    icon: {
      size: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
    };
    margin: {
      base: string;
    };
    mq: {
      hdpc: string;
      pc: string;
      tablet: string;
      tabletSM: string;
      mobile: string;
      mobileSM: string;
      mobileFold: string;
    };
    typography: {
      [key in TypographyVariant]: {
        element: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
  }
}
