import { createSignal } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';

const [isFlickrScriptAdded, setFlickrScriptAdded] = createSignal(false);
export const flickrClasses = ['.flickr-embed'].join(',');
const flickrEmbedUrl = '//embedr.flickr.com/assets/client-code.js';

export const handleFlickrLoad = (): { status: string } => {
  if (document.querySelector(flickrClasses) && !isFlickrScriptAdded()) {
    createScriptLoader({ src: flickrEmbedUrl });
    setFlickrScriptAdded(true);
    return {
      status: 'createScriptLoader',
    };
  }
  return {
    status: 'flickrLoad',
  };
};
