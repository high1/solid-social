import { JSX } from 'solid-js';
import { getPadding } from 'utilities';
import { GeneralObserver } from 'components/general-observer';

export type EggheadLessonProperties = {
  /** Egghead lesson */
  lessonId: string;
};

export const EggheadLesson = (properties: EggheadLessonProperties): JSX.Element => (
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
        data-testid="egghead-lesson"
        title={`egghead-${properties.lessonId}`}
        src={`https://egghead.io/lessons/${properties.lessonId}/embed`}
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
