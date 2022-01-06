import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId, getPadding } from 'utilities';

export type VimeoProperties = {
  /** Vimeo id */
  vimeoId: string;
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Auto play the video */
  autoPlay?: boolean;
};

export const Vimeo = (properties: VimeoProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      autoPlay: false,
      skipTo: { h: 0, m: 0, s: 0 },
    },
    properties
  );
  return (
    <GeneralObserver>
      <div
        {...createTestId('vimeo')}
        class="vimeo-container-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          title={`vimeo-${properties_.vimeoId}`}
          class="vimeo-solid-social"
          src={`https://player.vimeo.com/video/${
            properties_.vimeoId
          }?autoplay=${properties_.autoPlay.toString()}#t=${properties_.skipTo.h}h${
            properties_.skipTo.m
          }m${properties_.skipTo.s}s`}
          allow="autoplay; fullscreen"
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
