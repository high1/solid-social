import { createEffect, createMemo, mergeProps, on } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad, handleTwttrUpdate } from './utilities';
import type { Component } from 'solid-js';

export type TweetProps = {
  /** Tweet link */
  tweetLink: string;
  /** Color theme of the Tweet */
  theme?: 'light' | 'dark';
  /** Alignment of the Tweet */
  align?: 'left' | 'center' | 'right';
  /** Hides the conversation */
  hideConversation?: boolean;
};

export const Tweet: Component<TweetProps> = (props) => {
  const props_ = mergeProps(
    {
      theme: 'light',
      align: 'left',
      hideConversation: false,
    } as const,
    props
  );
  const tweetId = createMemo(() => props_.tweetLink.split('/').at(-1) ?? '');
  createEffect(
    on(
      () => [props_.align, props_.theme, props_.hideConversation, props_.tweetLink],
      () => handleTwttrUpdate(`iframe[data-tweet-id="${tweetId()}"]`, props_),
      { defer: true }
    )
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <div
        id={`twitter-tweet-${tweetId()}`}
        class="twitter-solid-social"
        style={{ overflow: 'auto' }}
      >
        <blockquote
          class="twitter-tweet"
          data-theme={props_.theme}
          data-align={props_.align}
          data-conversation={props_.hideConversation ? 'none' : ''}
        >
          <a href={`//twitter.com/${props_.tweetLink}?ref_src=twsrc%5Etfw`}>{window.twttr && ''}</a>
        </blockquote>
      </div>
    </GeneralObserver>
  );
};
