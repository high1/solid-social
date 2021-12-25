import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad } from 'components/twitter/utilities';

export type TwitterMentionButtonProperties = {
  /** Twitter username */
  username: string;
  /** The size of the button */
  size?: 'large' | 'small';
};

export const TwitterMentionButton = (properties: TwitterMentionButtonProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      size: 'small',
    },
    properties
  );
  return (
    <GeneralObserver onEnter={() => handleTwttrLoad()}>
      <a
        data-testid="twitter-mention-button"
        href={`https://twitter.com/intent/tweet?screen_name=${properties_.username}&ref_src=twsrc%5Etfw`}
        class="twitter-mention-button twitter-mention-button-solid-social"
        data-size={properties_.size}
      >{`Tweet to @${properties_.username}`}</a>
    </GeneralObserver>
  );
};
