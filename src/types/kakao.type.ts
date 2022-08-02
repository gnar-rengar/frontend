interface LinkOjbect {
  webUrl?: string;
  mobileWebUrl?: string;
  androidExecutionParams?: string;
  iosExecutionParams?: string;
}

interface ContentObject {
  title: string;
  imageUrl: string;
  link: LinkOjbect;
  imageWidth?: number;
  imageHeight?: number;
  description?: string;
}

interface DefaultFeedSettings {
  objectType: 'feed';
  content: ContentObject;
  social?: any;
  buttons?: Array<any>;
  callback?: () => void;
  installTalk?: boolean;
}

interface KakaoShare {
  sendDefault: (settings: DefaultFeedSettings) => void;
}

export interface Kakao {
  isInitialized: () => boolean;
  init: (str: string) => void;
  Share: KakaoShare;
}
