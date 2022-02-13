import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handlePinterestBuild } from 'components/pinterest/utilities';
import { createTestId } from 'utilities';

export type PinProperties = {
  /** Pinterest id */
  pinId: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
};

export const Pin = (properties: PinProperties): JSX.Element => {
  const properties_ = mergeProps({ size: 'small' }, properties);
  return (
    <GeneralObserver onEnter={handlePinterestBuild}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        class="pinterest-pin"
        {...createTestId('pin')}
        data-pin-do="embedPin"
        data-pin-width={properties_.size}
        href={`//www.pinterest.com/pin/${properties_.pinId}`}
      />
    </GeneralObserver>
  );
};
