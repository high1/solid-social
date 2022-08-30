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
    .forEach((element) => void window.twttr?.widgets?.load?.(element));

export const handleTwttrLoad = (): void => {
  if (document.querySelector(twttrClasses) && !window.twttr) {
    createScriptLoader({ src: '//platform.twitter.com/widgets.js' });
    return;
  }
  twttrLoad();
};

export const handleTwttrUpdate = (
  targetElement: string,
  { theme }: { theme: 'light' | 'dark' }
): void => {
  const tweet = document.querySelector<HTMLIFrameElement>(targetElement);
  const source = tweet?.getAttribute('src');
  if (source) tweet?.setAttribute('src', source.replace(/theme=([^&]*)/, `theme=${theme}`));
};
