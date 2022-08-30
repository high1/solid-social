import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utilities';
import type { Component } from 'solid-js';

export type TwitterListProps = {
  /** Twitter username */
  username: string;
  /** The Twitter list name */
  listName: string;
  /** Color theme of the Timeline */
  theme?: 'light' | 'dark';
  /** Width for the iFrame */
  width?: number | string;
  /** Height for the iFrame. Null is full height */
  height?: number | string;
};

export const TwitterList: Component<TwitterListProps> = (props) => {
  const props_ = mergeProps({ theme: 'light', width: '498px', height: undefined }, props);
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <div class="twitter-solid-social" style={{ overflow: 'auto' }}>
        <a
          class="twitter-list"
          data-theme={props_.theme}
          data-width={props_.width}
          data-height={props_.height}
          href={`//twitter.com/${props_.username}/lists/${props_.listName}?ref_src=twsrc%5Etfw`}
        >
          {`A Twitter List by @${props_.username}`}
        </a>
      </div>
    </GeneralObserver>
  );
};
