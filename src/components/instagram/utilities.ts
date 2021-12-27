import { createScriptLoader } from '@solid-primitives/script-loader';

let isInstgrmScriptAdded = false;
export const instgrmClasses = [`.instagram-media`, `.instagram-media-rendered`].join(`,`);

const instgrmProcess = (): void => window?.instgrm?.Embeds.process();

export const handleInstagrmLoad = (): { status: 'createScriptLoader' | 'instgrmProcess' } => {
  if (document.querySelector(instgrmClasses) && !isInstgrmScriptAdded) {
    createScriptLoader({ src: '//www.instagram.com/embed.js' });
    isInstgrmScriptAdded = true;
    return {
      status: 'createScriptLoader',
    };
  }
  instgrmProcess();
  return {
    status: 'instgrmProcess',
  };
};
