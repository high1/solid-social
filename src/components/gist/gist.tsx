import { createEffect, JSX } from 'solid-js';
import { createStore } from 'solid-js/store';
import { createScriptLoader } from '@solid-primitives/script-loader';
import { GeneralObserver } from 'components/general-observer';
import { createStyleSheet } from 'utilities';

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

  const root = `//gist.github.com/`;
  const gistId = properties.gistLink.split('/')[1];
  const gistEmbedScript = `${root}${properties.gistLink}.json?callback=gist_callback_${gistId}`;

  createEffect(() => {
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
      {!gistResponse.gist.isLoading && (
        <div data-testid="gist" className="gist-solid-social" innerHTML={gistResponse.gist.div} />
      )}
    </GeneralObserver>
  );
};
