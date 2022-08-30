import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utilities';
import type { Component } from 'solid-js';

export type TwitterMentionButtonProps = {
  /** Twitter username */
  username: string;
  /** The size of the button */
  size?: 'large' | 'small';
};

export const TwitterMentionButton: Component<TwitterMentionButtonProps> = (props) => {
  const props_ = mergeProps(
    {
      size: 'small',
    },
    props
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <a
        href={`//twitter.com/intent/tweet?screen_name=${props_.username}&ref_src=twsrc%5Etfw`}
        class="twitter-mention-button"
        data-size={props_.size}
      >{`Tweet to @${props_.username}`}</a>
    </GeneralObserver>
  );
};
