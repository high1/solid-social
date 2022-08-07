import { JSX } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleInstagrmLoad } from './utilities';
import { createTestId } from '../../utilities';

export type InstagramProperties = {
  /** Instagram id */
  instagramId: string;
};

export const Instagram = (properties: InstagramProperties): JSX.Element => (
  <GeneralObserver onEnter={handleInstagrmLoad}>
    <blockquote
      {...createTestId('instagram')}
      class="instagram-media instagram-solid-social"
      data-instgrm-version="12"
    >
      <a href={`//instagram.com/p/${properties.instagramId}`}>{window.instgrm && ''}</a>
    </blockquote>
  </GeneralObserver>
);
