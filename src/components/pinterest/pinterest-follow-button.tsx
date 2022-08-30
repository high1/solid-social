import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utilities';
import type { Component } from 'solid-js';

export type PinterestFollowButtonProps = {
  /** Pinterest username */
  username: string;
};

export const PinterestFollowButton: Component<PinterestFollowButtonProps> = (props) => (
  <GeneralObserver onEnter={handlePinterestBuild}>
    <a
      class="pinterest-follow-button"
      data-pin-do="buttonFollow"
      href={`//www.pinterest.com/${props.username}/`}
    >
      {`Follow @${props.username}`}
    </a>
  </GeneralObserver>
);
