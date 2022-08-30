import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleTwttrLoad } from './utilities';
import type { Component } from 'solid-js';

export type TwitterFollowButtonProps = {
  /** Twitter username */
  username: string;
  /** Show the follower count */
  showFollowers?: boolean;
  /** Show the username */
  showUsername?: boolean;
  /** The size of the button */
  size?: 'large' | 'small';
};

export const TwitterFollowButton: Component<TwitterFollowButtonProps> = (props) => {
  const props_ = mergeProps(
    {
      showFollowers: false,
      showUsername: true,
      size: 'small',
    },
    props
  );
  return (
    <GeneralObserver onEnter={handleTwttrLoad}>
      <a
        href={`//twitter.com/${props_.username}?ref_src=twsrc%5Etfw`}
        class="twitter-follow-button"
        data-show-count={props_.showFollowers}
        data-show-screen-name={props_.showUsername}
        data-size={props_.size}
      >{`Follow @${props_.username}`}</a>
    </GeneralObserver>
  );
};
