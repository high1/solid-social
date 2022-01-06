import { createScriptLoader } from '@solid-primitives/script-loader';

export const twttrClasses = [
  'twitter-tweet',
  'twitter-follow-button',
  'twitter-hashtag-button',
  'twitter-list',
  'twitter-mention-button',
  'twitter-timeline',
]
  .map((twttrClass) => `.${twttrClass}-solid-social`)
  .join(',');

const twttrLoad = (): void =>
  document
    .querySelectorAll(twttrClasses)
    // eslint-disable-next-line unicorn/no-array-for-each
    .forEach((element) => window.twttr?.widgets?.load?.(element));

export const handleTwttrLoad = (): { status: 'createScriptLoader' | 'twttrLoad' } => {
  if (document.querySelector(twttrClasses) && !window.twttr) {
    createScriptLoader({ src: '//platform.twitter.com/widgets.js' });
    return {
      status: 'createScriptLoader',
    };
  }
  twttrLoad();
  return {
    status: 'twttrLoad',
  };
};
