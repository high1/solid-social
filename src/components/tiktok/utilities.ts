import { createScriptLoader } from '@solid-primitives/script-loader';

export const tikTokClass = `.tiktok-solid-social`;
const tikTokEmbedUrl = `//www.tiktok.com/embed.js`;

export const handleTikTokLoad = (): { status: 'createScriptLoader' | 'tikTokLoad' } => {
  if (document.querySelector(tikTokClass) && !window.tiktok) {
    createScriptLoader({ src: tikTokEmbedUrl });
    return {
      status: 'createScriptLoader',
    };
  }
  return {
    status: 'tikTokLoad',
  };
};
