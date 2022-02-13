import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type SpotifyProperties = {
  /** Spotify link */
  spotifyLink: string;
  /** Width for the iFrame */
  width?: number | string;
  /** Height for the iFrame */
  height?: number | string;
};

export const Spotify = (properties: SpotifyProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      width: 320,
      height: 380,
    },
    properties
  );
  return (
    <GeneralObserver>
      <iframe
        {...createTestId('spotify')}
        title={`spotify-${properties_.spotifyLink}`}
        class="spotify"
        src={`//open.spotify.com/embed/${properties.spotifyLink}`}
        width={properties_.width}
        height={properties_.height}
        allow="encrypted-media"
      />
    </GeneralObserver>
  );
};
