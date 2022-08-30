import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handlePinterestBuild } from './utilities';
import type { Component } from 'solid-js';

export type PinProps = {
  /** Pinterest id */
  pinId: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
};

export const Pin: Component<PinProps> = (props) => {
  const props_ = mergeProps({ size: 'small' }, props);
  return (
    <GeneralObserver onEnter={handlePinterestBuild}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        class="pinterest-pin"
        data-pin-do="embedPin"
        data-pin-width={props_.size}
        href={`//www.pinterest.com/pin/${props_.pinId}`}
      />
    </GeneralObserver>
  );
};
