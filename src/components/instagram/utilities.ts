import { createScriptLoader } from '@solid-primitives/script-loader';

export const instgrmClasses = ['.instagram-media', '.instagram-media-rendered'].join(',');

const instgrmProcess = (): void => window?.instgrm?.Embeds.process();

export const handleInstagrmLoad = (): { status: 'createScriptLoader' | 'instgrmProcess' } => {
  if (document.querySelector(instgrmClasses) && !window.instgrm) {
    createScriptLoader({ src: '//www.instagram.com/embed.js' });
    return {
      status: 'createScriptLoader',
    };
  }
  instgrmProcess();
  return {
    status: 'instgrmProcess',
  };
};
