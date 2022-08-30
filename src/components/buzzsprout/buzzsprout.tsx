import { mergeProps, Show } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type BuzzsproutProps = {
  /* Buzzsprout id: podcastId/episodeId`*/
  buzzsproutId: string;
  /* width of the iframe: default to 100% */
  width?: string;
  /* height of the iframe: default to 200px */
  height?: string;
};

export const Buzzsprout: Component<BuzzsproutProps> = (props) => {
  const props_ = mergeProps(
    {
      width: '100%',
      height: '200',
    },
    props
  );
  return (
    <Show when={/^\d{7}\/\d{7}-[\W\w]+/.test(props_.buzzsproutId)}>
      <GeneralObserver>
        <div class="buzzsprout-solid-social" style={{ position: 'relative' }}>
          <iframe
            class="buzzsprout"
            title={`buzzsprout-${props_.buzzsproutId}`}
            src={`//www.buzzsprout.com/${props_.buzzsproutId}?client_source=small_player&amp;iframe=true`}
            width={props_.width}
            height={props_.height}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            scrolling="no"
          />
        </div>
      </GeneralObserver>
    </Show>
  );
};
