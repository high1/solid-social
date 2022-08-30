import { GeneralObserver } from '../general-observer';
import { handleTikTokLoad } from './utilities';
import type { Component } from 'solid-js';

export type TikTokProps = {
  /** TikTok id */
  tikTokId: string;
};

export const TikTok: Component<TikTokProps> = (props) => (
  <GeneralObserver onEnter={handleTikTokLoad}>
    <blockquote
      class="tiktok"
      cite={`//www.tiktok.com/${props.tikTokId}`}
      data-video-id={props.tikTokId.split('/').pop()}
    >
      <section>
        <a href={`//tiktok.com/${props.tikTokId}`}>{!window.tiktok && ''}</a>
      </section>
    </blockquote>
  </GeneralObserver>
);
