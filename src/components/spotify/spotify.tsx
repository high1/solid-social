import { mergeProps, type Component } from 'solid-js';
import { GeneralObserver } from '../general-observer';

export type SpotifyProps = {
  /** Spotify link */
  spotifyLink: string;
  /** Width for the iFrame */
  width?: number | string;
  /** Height for the iFrame */
  height?: number | string;
  /** theme */
  theme?: 'dark';
};

export const Spotify: Component<SpotifyProps> = (props) => {
  const props_ = mergeProps(
    {
      width: '100%',
      height: 352,
    },
    props
  );

  return (
    <GeneralObserver>
      <iframe
        title={`spotify-${props_.spotifyLink}`}
        class="spotify"
        src={`//open.spotify.com/embed/${props_.spotifyLink}${
          props_.theme === 'dark' ? '?theme=0' : ''
        }`}
        width={props_.width}
        height={props_.height}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        style={{ 'border-radius': '12px' }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        frameborder={0}
      />
    </GeneralObserver>
  );
};
