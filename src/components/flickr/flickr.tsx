import { JSX } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleFlickrLoad } from './utilities';
import { createTestId } from '../../utilities';

export type FlickrProperties = {
  /** Flickr image link*/
  flickrLink: string;
};

export const Flickr = (properties: FlickrProperties): JSX.Element => (
  <GeneralObserver onEnter={handleFlickrLoad}>
    <span
      {...createTestId('flickr')}
      class="flickr"
      data-flickr-embed="true"
      data-header="true"
      data-footer="true"
    >
      <img
        src={`//live.staticflickr.com/${properties.flickrLink}`}
        width="100%"
        height="auto"
        alt={properties.flickrLink}
      />
    </span>
  </GeneralObserver>
);
