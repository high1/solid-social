export {};

declare global {
  interface Window {
    twttr: {
      widgets: {
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
