import { JSX } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { handleTikTokLoad } from 'components/tiktok/utilities';
import { createTestId } from 'utilities';

export type TikTokProperties = {
  /** TikTok id */
  tikTokId: string;
};

export const TikTok = (properties: TikTokProperties): JSX.Element => (
  <GeneralObserver onEnter={handleTikTokLoad}>
    <blockquote
      {...createTestId('tiktok')}
      class="tiktok-solid-social"
      cite={`https://www.tiktok.com/${properties.tikTokId}`}
      data-video-id={properties.tikTokId.split('/').pop()}
    >
      <section>
        <a href={`https://tiktok.com/${properties.tikTokId}`}>{!window?.tiktok ? 'Loading' : ''}</a>
      </section>
    </blockquote>
  </GeneralObserver>
);
