export {};

declare global {
  interface Window {
    twttr: {
      ready: () => Promise<void>;
      widgets: {
        createTweet: (
          tweetId: string,
          elementId: Element,
          options: Record<string, unknown>
        ) => Promise<void>;
        load: (element: Element | NodeListOf<Element> | null) => Promise<void>;
      };
    };
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
    LI: unknown;
    LIRenderAll: () => void;
    PinUtils: {
      build: () => void;
    };
    tiktok: unknown;
  }
}
