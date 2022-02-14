import { createScriptLoader } from '@solid-primitives/script-loader';

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

const twttrLoad = (): void =>
  document
    .querySelectorAll(twttrClasses)
    // eslint-disable-next-line unicorn/no-array-for-each
    .forEach((element) => void window.twttr?.widgets?.load?.(element));

export const handleTwttrLoad = (): void => {
  if (document.querySelector(twttrClasses) && !window.twttr) {
    createScriptLoader({ src: '//platform.twitter.com/widgets.js' });
    return;
  }
  twttrLoad();
};

export const handleTwttrUpdate = (
  tweetId: string,
  targetElement: string,
  options: { theme: 'light' | 'dark' }
): void => {
  const element = document.querySelector(targetElement);
  if (element) {
    element.innerHTML = '';
    void window.twttr?.widgets?.createTweet(tweetId, element, options);
  }
};
