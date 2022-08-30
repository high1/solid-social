import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { getPadding } from '../../utilities';
import { handleWistiaLoad } from './utilities';
import type { Component } from 'solid-js';

export type WistiaProps = {
  /** Video ID, extracted from Wistia URL. */
  videoId: string;
  /** Enable player's "full screen" control. */
  allowfullscreen?: boolean;
  /** Video player's width, set to 100% (default) for responsive, or exact value for fixed (eg. "640px"). */
  width?: string;
  /** Video player's height, set to 100% (default) for responsive, or exact value for fixed (eg. "380px"). */
  height?: string;
  /** Aspect ratio of the video, used to calculate padding offset. */
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | '8:5';
  /** Auto play video when component renders. */
  autoPlay?: boolean;
};

export const Wistia: Component<WistiaProps> = (props) => {
  const props_ = mergeProps(
    {
      allowfullscreen: true,
      aspectRatio: '16:9',
      width: '100%',
      height: '100%',
      autoPlay: false,
    },
    props
  );

  return (
    <GeneralObserver onEnter={handleWistiaLoad}>
      <div
        class="wistia-container-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(props_.aspectRatio),
        }}
      >
        <iframe
          title={`wistia-${props_.videoId}`}
          class="wistia-solid-social"
          src={`//fast.wistia.net/embed/iframe/${props_.videoId}${
            props.autoPlay ? '?autoPlay=true' : ''
          }`}
          allow={`autoplay; ${props_.allowfullscreen ? 'fullscreen' : ''}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: props_.width,
            height: props_.height,
          }}
        />
      </div>
    </GeneralObserver>
  );
};
