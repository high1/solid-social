import { createScriptLoader } from '@solid-primitives/script-loader';

export const handleTikTokLoad = (): void => {
  if (document.querySelector('.tiktok') && !window.tiktok) {
    createScriptLoader({ src: '//www.tiktok.com/embed.js' });
  }
};
