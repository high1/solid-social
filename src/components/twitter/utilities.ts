import { createScriptLoader } from '@solid-primitives/script-loader';

let isTwttrScriptAdded = false;

export const twttrClassNames = [
  `.twitter-tweet`,
  `.twitter-timeline`,
  `.twitter-follow-button`,
  `.twitter-mention-button`,
  `.twitter-hashtag-button`,
].join(`,`);

// const twttrEmbedScript = `
// !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")
// `;

const twttrLoad = (): void =>
  window.twttr?.widgets?.load?.(document.querySelectorAll(`solid-social`));

export const handleTwttrLoad = (): { status: string } => {
  if (document.querySelector(twttrClassNames) && !isTwttrScriptAdded) {
    createScriptLoader({ src: '//platform.twitter.com/widgets.js' });
    isTwttrScriptAdded = true;
    return {
      status: 'createScriptTag',
    };
  }
  twttrLoad();
  return {
    status: 'twttrLoad',
  };
};
