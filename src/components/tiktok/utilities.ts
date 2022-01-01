import { createScriptLoader } from '@solid-primitives/script-loader';

export const tikTokClassNames = `.tiktok-embed`;
const tikTokEmbedUrl = `//www.tiktok.com/embed.js`;

export const handleTikTokLoad = (): { status: 'createScriptLoader' | 'tikTokLoad' } => {
  if (document.querySelector(tikTokClassNames) !== null && !window.tiktok) {
    createScriptLoader({ src: tikTokEmbedUrl });
    return {
      status: 'createScriptLoader',
    };
  }
  return {
    status: 'tikTokLoad',
  };
};
