import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad } from 'components/twitter/utilities';

export type TwitterFollowButtonProperties = {
  /** Twitter username */
  username: string;
  /** Show the follower count */
  showFollowers?: boolean;
  /** Show the username */
  showUsername?: boolean;
  /** The size of the button */
  size?: 'large' | 'small';
};

export const TwitterFollowButton = (properties: TwitterFollowButtonProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      showFollowers: false,
      showUsername: true,
      size: 'small',
    },
    properties
  );
  return (
    <GeneralObserver onEnter={() => handleTwttrLoad()}>
      <a
        data-testid="twitter-follow-button"
        href={`https://twitter.com/${properties_.username}?ref_src=twsrc%5Etfw`}
        class="twitter-follow-button twitter-follow-button-solid-social"
        data-show-count={properties_.showFollowers}
        data-show-screen-name={properties_.showUsername}
        data-size={properties_.size}
      >{`Follow @${properties_.username}`}</a>
    </GeneralObserver>
  );
};
