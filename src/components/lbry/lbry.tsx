import { getPadding } from '../../utilities';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type LbryProps = {
  /** Lbry id */
  lbryId: string;
  /** Skip to a time in the video in seconds */
  skipTo?: number;
};

export const Lbry: Component<LbryProps> = (props) => (
  <GeneralObserver>
    <div
      class="lbry-solid-social"
      style={{
        position: 'relative',
        width: '100%',
        ...getPadding('16:9'),
      }}
    >
      <iframe
        class="lbry"
        title={`lbry-${props.lbryId}`}
        src={`//lbry.tv/$/embed/${props.lbryId}?t=${props.skipTo ?? 0}`}
        allow="fullscreen"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  </GeneralObserver>
);
