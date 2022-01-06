import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type ListenNotesEpisodeProperties = {
  /** ListenNotes Episode */
  episodeId: string;
  /* width of the iframe: default to 100% */
  width?: string;
  /* height of the iframe: default to 200px */
  height?: string;
};

export const ListenNotesEpisode = (properties: ListenNotesEpisodeProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      width: '100%',
      height: '180px',
    },
    properties
  );
  return (
    <GeneralObserver>
      <div
        class="listennotes-container-solid-social"
        style={{
          position: 'relative',
          height: properties_.height,
          width: properties_.width,
        }}
      >
        <iframe
          {...createTestId('listennotes-episode')}
          class="listennotes-episode-solid-social"
          title={`listennotes-${properties.episodeId}`}
          src={`https://www.listennotes.com/podcasts/${properties.episodeId}/embed/`}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          frameborder={0}
          scrolling="no"
          loading="lazy"
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
