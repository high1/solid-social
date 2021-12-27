import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { constructTwitchURL } from 'components/twitch/utilities';
import { createTestId, getPadding } from 'utilities';

export type TwitchProperties = {
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

export const Twitch = (properties: TwitchProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      parent: 'localhost',
      autoPlay: false,
      skipTo: { h: 0, m: 0, s: 0 },
      channel: '',
      collection: '',
    },
    properties
  );
  const title = properties_.twitchId ? `twitch-${properties_.twitchId}` : `twitch`;
  const baseUrl = `https://player.twitch.tv/?autoplay=${properties_.autoPlay.toString()}&t=${
    properties_.skipTo.h
  }h${properties_.skipTo.m}m${properties_.skipTo.s}s&parent=${properties_.parent}`;
  const constructedSourceURL = constructTwitchURL(
    properties_.twitchId,
    properties_.channel,
    properties_.collection,
    baseUrl
  );

  return (
    <GeneralObserver>
      <div
        {...createTestId('twitch')}
        class="twitch-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding('16:9'),
        }}
      >
        <iframe
          title={title}
          src={constructedSourceURL}
          // src={`https://clips.twitch.tv/embed?clip=AlertProductiveStingrayNononoCat&parent=${parent}`}
          allow="autoplay; fullscreen"
          allowfullscreen
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
