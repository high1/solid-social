import { JSX } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleInstagrmLoad } from 'components/instagram/utilities';

export type InstagramProperties = {
  /** Instagram id */
  instagramId: string;
};

export const Instagram = (properties: InstagramProperties): JSX.Element => (
  <GeneralObserver onEnter={() => handleInstagrmLoad()}>
    <blockquote
      data-testid="instagram"
      className="instagram-media instagram-mdx-embed"
      data-instgrm-version="12"
    >
      <a href={`https://instagram.com/p/${properties.instagramId}`}>
        {window?.instgrm ? 'Loading' : ''}
      </a>
    </blockquote>
  </GeneralObserver>
);
