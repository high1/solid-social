import { createScriptTag } from 'utilities';

let isInstgrmScriptAdded = false;
export const instgrmClassNames = [`.instagram-media`, `.instagram-media-rendered`].join(`,`);
const instgrmEmbedUrl = `https://www.instagram.com/embed.js`;

const instgrmProcess = (): void => window?.instgrm?.Embeds.process();

export const handleInstagrmLoad = (): { status: string } => {
  if (document.querySelector(instgrmClassNames) && !isInstgrmScriptAdded) {
    createScriptTag(instgrmEmbedUrl);
    isInstgrmScriptAdded = true;
    return {
      status: 'createScriptTag',
    };
  }
  instgrmProcess();
  return {
    status: 'instgrmProcess',
  };
};
