import '@emotion/react';

import type { TypographyVariant } from './typography.type';
import type { ColorVariant } from './color.type';

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
      [key in ColorVariant]: string;
    };
    typography: {
      [key in TypographyVariant]: {
        element: string;
        fontSize: string;
        fontWeight: string;
        lineHeight: string;
      };
    };
    margin: {
      base: string;
    };
  }
}
