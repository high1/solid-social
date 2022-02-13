import { createScriptLoader } from '@solid-primitives/script-loader';

export const instgrmClasses = ['.instagram-media', '.instagram-media-rendered'].join(',');

const instgrmProcess = (): void => window?.instgrm?.Embeds.process();

export const handleInstagrmLoad = (): void => {
  if (document.querySelector(instgrmClasses) && !window.instgrm) {
    createScriptLoader({ src: '//www.instagram.com/embed.js' });
    return;
  }
  instgrmProcess();
};
