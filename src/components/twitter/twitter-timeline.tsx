import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utilities';
import type { Component } from 'solid-js';

export type TwitterTimelineProps = {
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

export const TwitterTimeline: Component<TwitterTimelineProps> = (props) => {
  const props_ = mergeProps(
    {
      theme: 'light',
      width: '498px',
    },
    props
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <div class="twitter-solid-social" style={{ overflow: 'auto' }}>
        <a
          class="twitter-timeline"
          data-theme={props_.theme}
          data-width={props_.width}
          data-height={props_.height}
          href={`//twitter.com/${props_.username}${
            props_.showLikes ? `/likes` : ''
          }?ref_src=twsrc%5Etfw`}
        >
          {`Tweets by @${props_.username}`}
        </a>
      </div>
    </GeneralObserver>
  );
};
