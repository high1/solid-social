import { createEffect, JSX, mergeProps, on } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad, handleTwttrUpdate } from 'components/twitter/utilities';
import { createTestId } from 'utilities';

export type TweetProperties = {
  /** Tweet link */
  tweetLink: string;
  /** Color theme of the Tweet */
  theme?: 'light' | 'dark';
  /** Alignment of the Tweet */
  align?: 'left' | 'center' | 'right';
  /** Hides the conversation */
  hideConversation?: boolean;
};

export const Tweet = (properties: TweetProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      theme: 'light',
      align: 'left',
      hideConversation: false,
    },
    properties
  );
  const tweetLinkSplit = properties_.tweetLink.split('/');
  const tweetId = tweetLinkSplit[tweetLinkSplit.length - 1];
  createEffect(
    on(
      () => [
        properties_.align,
        properties_.theme,
        properties_.hideConversation,
        properties_.tweetLink,
      ],
      () => handleTwttrUpdate(`iframe[data-tweet-id="${tweetId}"]`, properties_),
      { defer: true }
    )
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <div
        {...createTestId('twitter-tweet')}
        id={`twitter-tweet-${tweetId}`}
        class="twitter-solid-social"
        style={{ overflow: 'auto' }}
      >
        <blockquote
          class="twitter-tweet"
          data-theme={properties_.theme}
          data-align={properties_.align}
          data-conversation={properties_.hideConversation ? 'none' : ''}
        >
          <a href={`//twitter.com/${properties_.tweetLink}?ref_src=twsrc%5Etfw`}>
            {window.twttr && ''}
          </a>
        </blockquote>
      </div>
    </GeneralObserver>
  );
};
