import { GeneralObserver } from '../general-observer';
import { handleFlickrLoad } from './utilities';
import type { Component } from 'solid-js';

export type FlickrProps = {
  /** Flickr image link*/
  flickrLink: string;
};

export const Flickr: Component<FlickrProps> = (props) => (
  <GeneralObserver onEnter={handleFlickrLoad}>
    <span class="flickr" data-flickr-embed="true" data-header="true" data-footer="true">
      <img
        src={`//live.staticflickr.com/${props.flickrLink}`}
        width="100%"
        height="auto"
        alt={props.flickrLink}
      />
    </span>
  </GeneralObserver>
);
