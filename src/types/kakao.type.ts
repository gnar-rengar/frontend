interface DefaultFeedSettings {
  objectType: string;
  content: any;
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
  init: (...args: any[]) => void;
  Share: KakaoShare;
}
