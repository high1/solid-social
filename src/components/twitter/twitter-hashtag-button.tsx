import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utilities';
import type { Component } from 'solid-js';

export type TwitterHashtagButtonProps = {
  /** Twitter hashtag */
  hashtag: string;
  /** The size of the button */
  size?: 'large' | 'small';
};

export const TwitterHashtagButton: Component<TwitterHashtagButtonProps> = (props) => {
  const props_ = mergeProps(
    {
      size: 'small',
    },
    props
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <a
        href={`//twitter.com/intent/tweet?button_hashtag=${props_.hashtag}&ref_src=twsrc%5Etfw`}
        class="twitter-hashtag-button"
        data-size={props_.size}
      >{`Tweet #${props_.hashtag}`}</a>
    </GeneralObserver>
  );
};
