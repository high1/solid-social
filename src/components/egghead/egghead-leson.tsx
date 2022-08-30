import { getPadding } from '../../utilities';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type EggheadLessonProps = {
  /** Egghead lesson */
  lessonId: string;
};

export const EggheadLesson: Component<EggheadLessonProps> = (props) => (
  <GeneralObserver>
    <div
      class="egghead-lesson-solid-social"
      style={{
        position: 'relative',
        width: '100%',
        ...getPadding('16:9'),
      }}
    >
      <iframe
        class="egghead-lesson"
        title={`egghead-${props.lessonId}`}
        src={`//egghead.io/lessons/${props.lessonId}/embed`}
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
