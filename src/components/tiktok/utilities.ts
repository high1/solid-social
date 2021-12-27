import { createScriptLoader } from '@solid-primitives/script-loader';

let isTikTokScriptAdded = false;
export const tikTokClassNames = `.tiktok-embed`;
const tikTokEmbedUrl = `//www.tiktok.com/embed.js`;

export const handleTikTokLoad = (): { status: 'createScriptLoader' | 'tikTokLoad' } => {
  if (document.querySelector(tikTokClassNames) !== null && !isTikTokScriptAdded) {
    createScriptLoader({ src: tikTokEmbedUrl });
    isTikTokScriptAdded = true;
    return {
      status: 'createScriptLoader',
    };
  }
  return {
    status: 'tikTokLoad',
  };
};
