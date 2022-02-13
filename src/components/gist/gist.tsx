import { JSX, onMount, Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { createScriptLoader } from '@solid-primitives/script-loader';
import { GeneralObserver } from 'components/general-observer';
import { createStyleSheet, createTestId } from 'utilities';

export type GistProperties = {
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

export const Gist = (properties: GistProperties): JSX.Element => {
  const [gistResponse, setGistResponse] = createStore<{ gist: GistState }>({
    gist: {
      isLoading: true,
      div: '',
      file: '',
    },
  });

  const gistId = properties.gistLink.split('/')[1];
  const gistEmbedScript = `//gist.github.com/${properties.gistLink}.json?callback=gist_callback_${gistId}`;

  onMount(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window[`gist_callback_${gistId}`] = (gist: {
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
        <div {...createTestId('gist')} class="gist" innerHTML={gistResponse.gist.div} />
      </Show>
    </GeneralObserver>
  );
};
