import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    PRIMARY: string;
    PRIMARY_VARIANT: string;
    SECONDARY: string;
    ERROR: string;
    BACKGROUND: string;
    SURFACE: string;
    MOBILE: string;
    TABLET: string;
    TABLET_SM: string;
    PC: string;
    HDPC: string;
    MOBILE_SM: string;
    MOBILE_FOLD: string;
  }
}
