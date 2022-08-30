import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type ListenNotesEpisodeProps = {
  /** ListenNotes Episode */
  episodeId: string;
  /* width of the iframe: default to 100% */
  width?: string;
  /* height of the iframe: default to 200px */
  height?: string;
};

export const ListenNotesEpisode: Component<ListenNotesEpisodeProps> = (props) => {
  const props_ = mergeProps(
    {
      width: '100%',
      height: '180px',
    },
    props
  );
  return (
    <GeneralObserver>
      <div
        class="listennotes-episode-solid-social"
        style={{
          position: 'relative',
          height: props_.height,
          width: props_.width,
        }}
      >
        <iframe
          class="listennotes-episode"
          title={`listennotes-${props.episodeId}`}
          src={`//www.listennotes.com/podcasts/${props.episodeId}/embed/`}
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
