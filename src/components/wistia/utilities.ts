import { createScriptLoader } from '@solid-primitives/script-loader';

let isWistiaAdded = false;
const embedUrl = `//fast.wistia.net/assets/external/E-v1.js`;

export const handleWistiaLoad = (): void => {
  if (isWistiaAdded) {
    return;
  }
  createScriptLoader({ src: embedUrl });
  isWistiaAdded = true;
};
