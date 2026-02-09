export {};

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }

  interface KakaoSDK {
    init: (key: string) => void;
    isInitialized: () => boolean;
    Share: {
      sendDefault: (options: KakaoShareOptions) => void;
    };
  }

  interface KakaoShareOptions {
    objectType: "feed";
    content: {
      title: string;
      description?: string;
      imageUrl: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    };
    buttons?: Array<{
      title: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    }>;
  }
}
