import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type SimplecastEpisodeProps = {
  /** Simplecast Episode */
  episodeId: string;
  /** Color theme of the Player */
  theme?: `light` | `dark`;
};

export const SimplecastEpisode: Component<SimplecastEpisodeProps> = (props) => {
  const props_ = mergeProps(
    {
      theme: `light`,
    },
    props
  );
  return (
    <GeneralObserver>
      <div
        class="simplecast-episode-solid-social"
        style={{
          position: 'relative',
          height: '200px',
          width: '100%',
        }}
      >
        <iframe
          class="simplecast-episode"
          title={`simplecast-${props_.episodeId}`}
          src={`//player.simplecast.com/${props_.episodeId}${
            props_.theme === `dark` ? `?dark=true` : ``
          }`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          seamless
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
