import { JSX } from 'solid-js';
import { createTestId, getPadding } from 'utilities';
import { GeneralObserver } from 'components/general-observer';

export type CinnamonProperties = {
  /** Cinnamon id */
  cinnamonId: string;
};

export const Cinnamon = (properties: CinnamonProperties): JSX.Element => (
  <GeneralObserver>
    <div
      class="cinnamon-container-solid-social"
      style={{
        position: 'relative',
        width: '100%',
        ...getPadding('16:9'),
      }}
    >
      <iframe
        {...createTestId('cinnamon')}
        class="cinnamon-solid-social"
        title={`cinnamon-${properties.cinnamonId}`}
        src={`https://cinnamon.video/embed?v=${properties.cinnamonId}`}
        allow="monetization; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
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
