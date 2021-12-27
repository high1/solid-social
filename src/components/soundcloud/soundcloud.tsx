import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type SoundCloudProperties = {
  /** SoundCloud link */
  soundCloudLink: string;
  /** Auto play audio */
  autoPlay?: boolean;
  /** Show the visual artwork */
  visual?: boolean;
  /** Width for the iFrame */
  width?: number | string;
  /** Height for the iFrame */
  height?: number | string;
  /** The color of the play button without the # */
  color?: string;
};

export const SoundCloud = (properties: SoundCloudProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      width: '100%',
      height: 'auto',
      autoPlay: false,
      visual: false,
      color: '23ff00f5',
    },
    properties
  );
  return (
    <GeneralObserver>
      <iframe
        {...createTestId('soundcloud')}
        title={`sound-cloud-${properties_.soundCloudLink}`}
        class="soundcloud-solid-social"
        width={properties_.width}
        height={properties_.height}
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${
          properties_.soundCloudLink
        }&color=%23${
          properties_.color
        }&auto_play=${properties_.autoPlay.toString()}&visual=${properties_.visual.toString()}`}
      />
    </GeneralObserver>
  );
};
