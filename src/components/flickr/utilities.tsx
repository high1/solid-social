import { createScriptLoader } from '@solid-primitives/script-loader';

let isFlickrScriptAdded = false;
export const flickrClasses = [`.flickr-embed`].join(`,`);
const flickrEmbedUrl = `//embedr.flickr.com/assets/client-code.js`;

export const handleFlickrLoad = (): { status: string } => {
  if (document.querySelector(flickrClasses) && !isFlickrScriptAdded) {
    createScriptLoader({ src: flickrEmbedUrl });
    isFlickrScriptAdded = true;
    return {
      status: 'createScriptLoader',
    };
  }
  return {
    status: 'flickrLoad',
  };
};
