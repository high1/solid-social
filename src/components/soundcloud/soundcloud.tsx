import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type SoundCloudProps = {
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

export const SoundCloud: Component<SoundCloudProps> = (props) => {
  const props_ = mergeProps(
    {
      width: '100%',
      height: 'auto',
      autoPlay: false,
      visual: false,
      color: '23ff00f5',
    },
    props
  );
  return (
    <GeneralObserver>
      <iframe
        title={`sound-cloud-${props_.soundCloudLink}`}
        class="soundcloud"
        width={props_.width}
        height={props_.height}
        allow="autoplay"
        src={`//w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${
          props_.soundCloudLink
        }&color=%23${
          props_.color
        }&auto_play=${props_.autoPlay.toString()}&visual=${props_.visual.toString()}`}
      />
    </GeneralObserver>
  );
};
