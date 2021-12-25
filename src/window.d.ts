export {};

declare global {
  interface Window {
    twttr: {
      widgets: {
        load: (element: NodeListOf<Element>) => void;
      };
    };
    instgrm: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
