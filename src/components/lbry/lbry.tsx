import { JSX, mergeProps } from 'solid-js';
import { createTestId, getPadding } from 'utilities';
import { GeneralObserver } from '../general-observer';

export interface ILbryProperties {
  /** Lbry id */
  lbryId: string;
  /** Skip to a time in the video */
  skipTo?: {
    s: number;
  };
}

export const Lbry = (properties: ILbryProperties): JSX.Element => {
  const properties_ = mergeProps({ skipTo: { s: 0 } }, properties);
  return (
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
          {...createTestId('lbry')}
          title={`lbry-${properties_.lbryId}`}
          src={`https://lbry.tv/$/embed/${properties_.lbryId}?t=${properties_.skipTo.s}`}
          allow="fullscreen"
          allowfullscreen
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
};
