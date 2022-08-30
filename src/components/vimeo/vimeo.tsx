import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { getPadding } from '../../utilities';
import type { Component } from 'solid-js';

export type VimeoProps = {
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

export const Vimeo: Component<VimeoProps> = (props) => {
  const props_ = mergeProps(
    {
      autoPlay: false,
      skipTo: { h: 0, m: 0, s: 0 },
    },
    props
  );
  return (
    <GeneralObserver>
      <div
        class="vimeo-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          title={`vimeo-${props_.vimeoId}`}
          class="vimeo"
          src={`//player.vimeo.com/video/${
            props_.vimeoId
          }?autoplay=${props_.autoPlay.toString()}#t=${props_.skipTo.h || 0}h${props_.skipTo.m}m${
            props_.skipTo.s
          }s`}
          allow="autoplay; fullscreen"
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
