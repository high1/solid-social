import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { getPadding } from './utilities';
import type { Component } from 'solid-js';

export type WhimsicalProps = {
  /**
   * Whimsical id. Ex:
   * - given a public URL: //whimsical.com/Py4kdjbPzFpRoAPMbUxmaN
   * - diagramId will be: Py4kdjbPzFpRoAPMbUxmaN
   */
  diagramId: string;

  /**
   * Aspect ratio of Whimsical diagram
   */
  aspectRatio?: string;
};

export const Whimsical: Component<WhimsicalProps> = (props) => {
  const props_ = mergeProps(
    {
      aspectRatio: '1:1',
    },
    props
  );
  return (
    <GeneralObserver>
      <div
        class="whimsical-solid-social"
        style={{
          position: 'relative',
          width: '100%',
          ...getPadding(props_.aspectRatio),
        }}
      >
        <iframe
          title={`whimsical-${props_.diagramId}`}
          class="whimsical"
          src={`//whimsical.com/embed/${props_.diagramId}`}
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
