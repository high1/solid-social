import { createMemo, mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { getPadding } from '../../utilities';
import type { Component } from 'solid-js';

export type YouTubeProps = {
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
};

export const YouTube: Component<YouTubeProps> = (props) => {
  const props_ = mergeProps(
    {
      aspectRatio: '16:9',
      autoPlay: false,
      skipTo: { h: 0, m: 0, s: 0 },
      noCookie: false,
    } as const,
    props
  );

  const startTime = createMemo(() => {
    const { h, m, s } = props_.skipTo;
    return (h ?? 0) * 60 + m * 60 + s;
  });

  const source = createMemo(
    () =>
      `//www.youtube${props_.noCookie ? '-nocookie' : ''}.com/embed/${
        props_.youTubeId
          ? `${props_.youTubeId}?&autoplay=${props_.autoPlay.toString()}&start=${startTime()}`
          : `&videoseries?list=${props_.youTubePlaylistId ?? ''}`
      }`
  );

  return (
    <GeneralObserver>
      <div
        class="youtube-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(props_.aspectRatio),
        }}
      >
        <iframe
          class="youtube"
          title={`youtube-${props_.youTubeId ?? props_.youTubePlaylistId ?? ''}`}
          src={source()}
          allow="accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture"
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
