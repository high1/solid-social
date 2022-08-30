import { GeneralObserver } from '../general-observer';
import { handleInstagrmLoad } from './utilities';
import type { Component } from 'solid-js';

export type InstagramProps = {
  /** Instagram id */
  instagramId: string;
};

export const Instagram: Component<InstagramProps> = (props) => (
  <GeneralObserver onEnter={handleInstagrmLoad}>
    <blockquote class="instagram-media instagram-solid-social" data-instgrm-version="12">
      <a href={`//instagram.com/p/${props.instagramId}`}>{window.instgrm && ''}</a>
    </blockquote>
  </GeneralObserver>
);
