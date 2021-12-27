import { Component, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId, getPadding } from 'utilities';

export interface YouTubeProperties {
  /** YouTube id */
  youTubeId?: string;
  /** YouTube Playlist id */
  youTubePlaylistId?: string;
  /** Aspect ratio of YouTube video */
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | '8:5';
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Auto play the video */
  autoPlay?: boolean;
  /** No Cookie option */
  noCookie?: boolean;
}

export const YouTube: Component<YouTubeProperties> = (properties) => {
  const properties_ = mergeProps(
    {
      aspectRatio: '16:9',
      autoPlay: false,
      skipTo: { h: 0, m: 0, s: 0 },
      noCookie: false,
    },
    properties
  );
  const { h, m, s } = properties_.skipTo;

  const tH = h * 60;
  const tM = m * 60;

  const startTime = tH + tM + s;

  const source = `https://www.youtube${properties_.noCookie ? '-nocookie' : ''}.com/embed/${
    properties_.youTubeId
      ? `${properties_.youTubeId}?&autoplay=${properties_.autoPlay.toString()}&start=${startTime}`
      : `&videoseries?list=${properties_.youTubePlaylistId ?? ''}`
  }`;

  return (
    <GeneralObserver>
      <div
        class="youtube-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(properties_.aspectRatio),
        }}
      >
        <iframe
          {...createTestId('youtube')}
          title={`youTube-${properties_.youTubeId ?? properties_.youTubePlaylistId ?? ''}`}
          src={source}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
