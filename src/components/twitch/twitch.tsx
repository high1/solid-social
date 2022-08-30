import { createMemo, mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { constructTwitchURL } from './utilities';
import { getPadding } from '../../utilities';
import type { Component } from 'solid-js';

export type TwitchProps = {
  /** Domain(s) that will be embedding Twitch. You must have one parent key for each domain your site uses. */
  parent: string;
  /** Twitch id */
  twitchId?: string;
  /** Skip to a time in the video */
  skipTo?: {
    h?: number;
    m: number;
    s: number;
  };
  /** Auto play the video */
  autoPlay?: boolean;
  /** Name of the channel, for a live stream */
  channel?: string;
  /** Collection ID, for a collection of videos */
  collection?: string;
};

export const Twitch: Component<TwitchProps> = (props) => {
  const props_ = mergeProps(
    {
      parent: 'localhost',
      autoPlay: false,
      skipTo: { h: 0, m: 0, s: 0 },
      channel: '',
      collection: '',
    },
    props
  );
  const title = createMemo(() => (props_.twitchId ? `twitch-${props_.twitchId}` : `twitch`));
  const baseUrl = createMemo(
    () =>
      `//player.twitch.tv/?autoplay=${props_.autoPlay.toString()}&t=${props_.skipTo.h || 0}h${
        props_.skipTo.m
      }m${props_.skipTo.s}s&parent=${props_.parent}`
  );
  const constructedSourceURL = createMemo(() =>
    constructTwitchURL(props_.twitchId, props_.channel, props_.collection, baseUrl())
  );

  return (
    <GeneralObserver>
      <div
        class="twitch-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          title={title()}
          class="twitch"
          src={constructedSourceURL()}
          allow="autoplay; fullscreen"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </GeneralObserver>
  );
};
