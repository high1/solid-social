import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad } from 'components/twitter/utilities';
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
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <div
        {...createTestId('twitter-tweet')}
        class="twitter-container-solid-social"
        style={{ overflow: 'auto' }}
      >
        <blockquote
          class="twitter-tweet-solid-social"
          data-theme={properties_.theme}
          data-align={properties_.align}
          data-conversation={properties_.hideConversation ? 'none' : ''}
        >
          <a href={`https://twitter.com/${properties_.tweetLink}?ref_src=twsrc%5Etfw`}>
            {window?.twttr ? 'Loading' : ''}
          </a>
        </blockquote>
      </div>
    </GeneralObserver>
  );
};
