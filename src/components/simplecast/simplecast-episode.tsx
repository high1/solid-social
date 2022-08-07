import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { createTestId } from '../../utilities';

export type SimplecastEpisodeProperties = {
  /** Simplecast Episode */
  episodeId: string;
  /** Color theme of the Player */
  theme?: `light` | `dark`;
};

export const SimplecastEpisode = (properties: SimplecastEpisodeProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      theme: `light`,
    },
    properties
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
          {...createTestId('simplecast-episode')}
          class="simplecast-episode"
          title={`simplecast-${properties_.episodeId}`}
          src={`//player.simplecast.com/${properties_.episodeId}${
            properties_.theme === `dark` ? `?dark=true` : ``
          }`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
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
