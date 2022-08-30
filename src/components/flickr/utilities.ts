import { createScriptLoader } from '@solid-primitives/script-loader';

let isFlickrScriptAdded = false;
export const flickrClasses = ['.flickr-solid-social'].join(',');
const flickrEmbedUrl = '//embedr.flickr.com/assets/client-code.js';

export const handleFlickrLoad = (): void => {
  if (document.querySelector(flickrClasses) && !isFlickrScriptAdded)
    createScriptLoader({ src: flickrEmbedUrl, onload: () => (isFlickrScriptAdded = true) });
};
