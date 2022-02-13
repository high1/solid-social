import { createScriptLoader } from '@solid-primitives/script-loader';
// import { createScriptLoader } from 'utilities';

const twttrClasses = [
  'twitter-tweet',
  'twitter-follow-button',
  'twitter-hashtag-button',
  'twitter-list',
  'twitter-mention-button',
  'twitter-timeline',
]
  .map((twttrClass) => `.${twttrClass}`)
  .join(',');

const twttrLoad = (): void => {
  document
    .querySelectorAll(twttrClasses)
    // eslint-disable-next-line unicorn/no-array-for-each
    .forEach((element) => void window.twttr?.widgets?.load?.(element));
};

export const handleTwttrLoad = (): void => {
  if (document.querySelector(twttrClasses) && !window.twttr) {
    createScriptLoader({ src: '//platform.twitter.com/widgets.js' });
    return;
  }
  twttrLoad();
};
