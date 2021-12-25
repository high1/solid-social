import { createScriptLoader } from '@solid-primitives/script-loader';

let isInstgrmScriptAdded = false;
export const instgrmClassNames = [`.instagram-media`, `.instagram-media-rendered`].join(`,`);

const instgrmProcess = (): void => window?.instgrm?.Embeds.process();

export const handleInstagrmLoad = (): { status: string } => {
  if (document.querySelector(instgrmClassNames) && !isInstgrmScriptAdded) {
    createScriptLoader({ src: '//www.instagram.com/embed.js' });
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
