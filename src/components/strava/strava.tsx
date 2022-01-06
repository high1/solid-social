import { JSX } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type StravaProperties = {
  /** The Strava activityId */
  activityId: string;
};

export const Strava = (properties: StravaProperties): JSX.Element => (
  <GeneralObserver>
    <div
      {...createTestId('strava')}
      class="strava-container-solid-social"
      style={{
        position: 'relative',
        height: '350px',
        maxWidth: '568px',
        width: '100%',
        overflow: 'auto',
      }}
    >
      <iframe
        title={`strava-${properties.activityId}`}
        class="strava-solid-social"
        height="100%"
        width="100%"
        style={{
          minWidth: '380px',
        }}
        src={`https://www.strava.com/activities/${properties.activityId}`}
      />
    </div>
  </GeneralObserver>
);
