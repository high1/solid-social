import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type SpotifyProps = {
  /** Spotify link */
  spotifyLink: string;
  /** Width for the iFrame */
  width?: number | string;
  /** Height for the iFrame */
  height?: number | string;
};

export const Spotify: Component<SpotifyProps> = (props) => {
  const props_ = mergeProps(
    {
      width: 320,
      height: 380,
    },
    props
  );
  return (
    <GeneralObserver>
      <iframe
        title={`spotify-${props_.spotifyLink}`}
        class="spotify"
        src={`//open.spotify.com/embed/${props.spotifyLink}`}
        width={props_.width}
        height={props_.height}
        allow="encrypted-media"
      />
    </GeneralObserver>
  );
};
