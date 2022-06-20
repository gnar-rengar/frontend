import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    mq: {
      MOBILE: string;
      TABLET: string;
      TABLET_SM: string;
      PC: string;
      HDPC: string;
      MOBILE_SM: string;
      MOBILE_FOLD: string;
    };
    color: {
      PRIMARY: string;
      PRIMARY_VARIANT: string;
      SECONDARY: string;
      ERROR: string;
      BACKGROUND: string;
      SURFACE: string;
      ON_PRIMARY: string;
      ON_SECONDARY: string;
      ON_ERROR: string;
      ON_BACKGROUND: string;
      ON_SURfACE: string;
      SUB_ON_BACKGROUND: string;
      DISABLE: string;
    };
  }
}
