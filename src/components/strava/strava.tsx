import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type StravaProps = {
  /** The Strava activityId */
  activityId: string;
};

export const Strava: Component<StravaProps> = (props) => (
  <GeneralObserver>
    <div
      class="strava-solid-social"
      style={{
        position: 'relative',
        height: '350px',
        'max-width': '568px',
        width: '100%',
        overflow: 'auto',
      }}
    >
      <iframe
        title={`strava-${props.activityId}`}
        class="strava"
        height="100%"
        width="100%"
        style={{
          'min-width': '380px',
        }}
        src={`//www.strava.com/activities/${props.activityId}`}
      />
    </div>
  </GeneralObserver>
);
