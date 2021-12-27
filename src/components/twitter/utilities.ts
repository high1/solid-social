import { createScriptLoader } from '@solid-primitives/script-loader';

let isTwttrScriptAdded = false;

export const twttrClasses = [
  `.twitter-tweet`,
  `.twitter-timeline`,
  `.twitter-follow-button`,
  `.twitter-mention-button`,
  `.twitter-hashtag-button`,
].join(`,`);

const twttrLoad = (): void =>
  window.twttr?.widgets?.load?.(document.querySelectorAll(`solid-social`));

export const handleTwttrLoad = (): { status: 'createScriptLoader' | 'twttrLoad' } => {
  if (document.querySelector(twttrClasses) && !isTwttrScriptAdded) {
    createScriptLoader({ src: '//platform.twitter.com/widgets.js' });
    isTwttrScriptAdded = true;
    return {
      status: 'createScriptLoader',
    };
  }
  twttrLoad();
  return {
    status: 'twttrLoad',
  };
};
