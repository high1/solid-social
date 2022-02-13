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

  const getWikipediaHtml = async (): Promise<string> => {
    const response = await fetch(
      `//en.wikipedia.org/api/rest_v1/page/html/${properties_.wikipediaLink}`
    );
    const text = await response.text();
    return text.replace(/<a rel="mw:WikiLink"/g, '<a target="_blank" rel="mw:WikiLink"');
  };

  const [wiki] = createResource(() => properties_.wikipediaLink, getWikipediaHtml);

  return (
    <GeneralObserver>
      <ErrorBoundary fallback={(error) => <div>{String(error)}</div>}>
        <Suspense fallback="Loading...">
          <iframe
            {...createTestId('wikipedia')}
            class="wikipedia"
            title={properties_.wikipediaLink}
            style={{
              width: '100%',
              'min-height':
                typeof properties_.height === 'string'
                  ? properties_.height
                  : `${properties_.height}px`,
            }}
            srcdoc={wiki()}
          />
        </Suspense>
      </ErrorBoundary>
    </GeneralObserver>
  );
};
