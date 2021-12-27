import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad } from 'components/twitter/utilities';
import { createTestId } from 'utilities';

export type TwitterTimelineProperties = {
  /** Twitter username */
  username: string;
  /** Show Tweets liked by the username */
  showLikes?: boolean;
  /** Color theme of the Timeline */
  theme?: 'light' | 'dark';
  /** Width for the iFrame */
  width?: number | string;
  /** Height for the iFrame. Null is full height */
  height?: number | string;
};

export const TwitterTimeline = (properties: TwitterTimelineProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      theme: 'light',
      width: '498px',
    },
    properties
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <div style={{ overflow: 'auto' }}>
        <a
          {...createTestId('twitter-timeline')}
          class="twitter-timeline twitter-timeline-solid-social"
          data-theme={properties_.theme}
          data-width={properties_.width}
          data-height={properties_.height}
          href={`https://twitter.com/${properties_.username}${
            properties_.showLikes ? `/likes` : ''
          }?ref_src=twsrc%5Etfw`}
        >
          {`Tweets by @${properties_.username}`}
        </a>
      </div>
    </GeneralObserver>
  );
};
