import { createResource, ErrorBoundary, mergeProps, Suspense } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type WikipediaProps = {
  /** Wikipedia page link */
  wikipediaLink: string;
  /** Height for the iFrame */
  height?: number | string;
};

export const Wikipedia: Component<WikipediaProps> = (props) => {
  const props_ = mergeProps({ height: 600 }, props);
  const getWikipediaHtml = async (wikipediaLink: string): Promise<string> => {
    const response = await fetch(`//en.wikipedia.org/api/rest_v1/page/html/${wikipediaLink}`);
    const text = await response.text();
    return text.replace(/<a rel="mw:WikiLink"/g, '<a target="_blank" rel="mw:WikiLink"');
  };

  const [wiki] = createResource(() => props_.wikipediaLink, getWikipediaHtml);

  return (
    <GeneralObserver>
      <ErrorBoundary fallback={(error) => <div>{String(error)}</div>}>
        <Suspense fallback="">
          <iframe
            class="wikipedia"
            title={props_.wikipediaLink}
            style={{
              width: '100%',
              'min-height':
                typeof props_.height === 'string' ? props_.height : `${props_.height}px`,
            }}
            srcdoc={wiki()}
          />
        </Suspense>
      </ErrorBoundary>
    </GeneralObserver>
  );
};
