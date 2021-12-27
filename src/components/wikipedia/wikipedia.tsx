import { createResource, ErrorBoundary, JSX, mergeProps, Suspense } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type WikipediaProperties = {
  /** Wikipedia page link */
  wikipediaLink: string;
  /** Height for the iFrame */
  height?: number | string;
};

export const Wikipedia = (properties: WikipediaProperties): JSX.Element => {
  const properties_ = mergeProps({ height: 600 }, properties);

  const wikipediaEmbedUrl = `https://en.wikipedia.org/api/rest_v1/page/html/${properties_.wikipediaLink}`;

  const [wiki] = createResource(() => fetch(wikipediaEmbedUrl).then((response) => response.text()));

  return (
    <GeneralObserver>
      <ErrorBoundary fallback={(error) => <div>{String(error)}</div>}>
        <Suspense fallback="Loading...">
          <iframe
            {...createTestId('wikipedia')}
            class="wikipedia-solid-social"
            title={properties_.wikipediaLink}
            style={{
              width: '100%',
              'min-height':
                typeof properties_.height === 'string'
                  ? properties_.height
                  : `${properties_.height}px`,
            }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            srcDoc={wiki().replace(/<a rel="mw:WikiLink"/g, '<a target="_blank" rel="mw:WikiLink"')}
          />
        </Suspense>
      </ErrorBoundary>
    </GeneralObserver>
  );
};
