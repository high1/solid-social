import { createMemo, onMount, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { createScriptLoader } from '@solid-primitives/script-loader';
import { GeneralObserver } from '../general-observer';
import { createStyleSheet } from '../../utilities';
import type { Component } from 'solid-js';

export type GistProps = {
  /** Gist link */
  gistLink: string;
};

type GistState = {
  /** Loading status */
  isLoading: boolean;
  /** HTML response from api  */
  div?: string;
  /** The file name of the Gist*/
  file?: string;
};

export const Gist: Component<GistProps> = (props) => {
  const [gistResponse, setGistResponse] = createStore<{ gist: GistState }>({
    gist: {
      isLoading: true,
      div: '',
      file: '',
    },
  });

  const gistId = createMemo(() => props.gistLink.split('/')[1]);
  const gistEmbedScript = createMemo(
    () => `//gist.github.com/${props.gistLink}.json?callback=gist_callback_${gistId()}`
  );

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    window[`gist_callback_${gistId()}`] = (gist: {
      div: string;
      files: string[];
      stylesheet: string;
    }) => {
      createStyleSheet(gist.stylesheet);
      setGistResponse({
        gist: {
          isLoading: false,
          div: gist.div,
          file: gist.files[0],
        },
      });
    };
    createScriptLoader({ src: gistEmbedScript });
  });

  return (
    <GeneralObserver>
      <Show when={!gistResponse.gist.isLoading}>
        {/* eslint-disable-next-line solid/no-innerhtml */}
        <div class="gist" innerHTML={gistResponse.gist.div} />
      </Show>
    </GeneralObserver>
  );
};
