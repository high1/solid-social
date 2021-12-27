import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId, getPadding } from 'utilities';
import { handleWistiaLoad } from 'components/wistia/utilities';

export type WistiaProperties = {
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

export const Wistia = (properties: WistiaProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      allowfullscreen: true,
      aspectRatio: '16:9',
      width: '100%',
      height: '100%',
      autoPlay: false,
    },
    properties
  );

  handleWistiaLoad();

  return (
    <GeneralObserver>
      <div
        className="wistia-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(properties_.aspectRatio),
        }}
      >
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${properties_.videoId}${
            properties.autoPlay ? '?autoPlay=true' : ''
          }`}
          {...createTestId('wistia')}
          title={`wistia-${properties_.videoId}`}
          allow={`autoplay; ${properties_.allowfullscreen ? 'fullscreen' : ''}`}
          class="wistia-solid-social-iframe"
          allowfullscreen={properties_.allowfullscreen}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: properties_.width,
            height: properties_.height,
          }}
        ></iframe>
      </div>
    </GeneralObserver>
  );
};
