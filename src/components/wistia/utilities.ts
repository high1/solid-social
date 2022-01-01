import { createSignal } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';

const [isWistiaAdded, setWistiaAdded] = createSignal(false);
const embedUrl = `//fast.wistia.net/assets/external/E-v1.js`;

export const handleWistiaLoad = (): void => {
  if (isWistiaAdded()) return;
  createScriptLoader({ src: embedUrl });
  setWistiaAdded(true);
};
