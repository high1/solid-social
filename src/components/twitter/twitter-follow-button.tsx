import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad } from 'components/twitter/utilities';
import { createTestId } from 'utilities';

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
    <GeneralObserver onEnter={handleTwttrLoad}>
      <a
        {...createTestId('twitter-follow-button')}
        href={`//twitter.com/${properties_.username}?ref_src=twsrc%5Etfw`}
        class="twitter-follow-button"
        data-show-count={properties_.showFollowers}
        data-show-screen-name={properties_.showUsername}
        data-size={properties_.size}
      >{`Follow @${properties_.username}`}</a>
    </GeneralObserver>
  );
};
