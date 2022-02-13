import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTwttrLoad } from 'components/twitter/utilities';
import { createTestId } from 'utilities';

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
    <GeneralObserver onEnter={handleTwttrLoad}>
      <a
        {...createTestId('twitter-mention-button')}
        href={`//twitter.com/intent/tweet?screen_name=${properties_.username}&ref_src=twsrc%5Etfw`}
        class="twitter-mention-button"
        data-size={properties_.size}
      >{`Tweet to @${properties_.username}`}</a>
    </GeneralObserver>
  );
};
