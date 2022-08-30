import { getPadding } from '../../utilities';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type CinnamonProps = {
  /** Cinnamon id */
  cinnamonId: string;
};

export const Cinnamon: Component<CinnamonProps> = (props) => (
  <GeneralObserver>
    <div
      class="cinnamon-solid-social"
      style={{
        position: 'relative',
        width: '100%',
        ...getPadding('16:9'),
      }}
    >
      <iframe
        class="cinnamon"
        title={`cinnamon-${props.cinnamonId}`}
        src={`//cinnamon.video/embed?v=${props.cinnamonId}`}
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
