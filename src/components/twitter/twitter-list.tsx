import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utilities';
import { createTestId } from '../../utilities';

export type TwitterListProperties = {
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

export const TwitterList = (properties: TwitterListProperties): JSX.Element => {
  const properties_ = mergeProps({ theme: 'light', width: '498px', height: undefined }, properties);
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <div class="twitter-solid-social" style={{ overflow: 'auto' }}>
        <a
          {...createTestId('twitter-list')}
          class="twitter-list"
          data-theme={properties_.theme}
          data-width={properties_.width}
          data-height={properties_.height}
          href={`//twitter.com/${properties_.username}/lists/${properties_.listName}?ref_src=twsrc%5Etfw`}
        >
          {`A Twitter List by @${properties_.username}`}
        </a>
      </div>
    </GeneralObserver>
  );
};
