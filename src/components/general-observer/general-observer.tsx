import { Component, createEffect, createSignal, mergeProps, Show } from 'solid-js';
import { createIntersectionObserver } from '@solid-primitives/intersection-observer';
import { createTestId, isDefined } from 'utilities';

type GeneralObserverProperties = {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
  /** The height of the placeholder div before the component renders in */
  height?: number;
};

export const GeneralObserver: Component<GeneralObserverProperties> = (properties) => {
  const properties_ = mergeProps({ height: 0 }, properties);
  const [divReference, setDivReference] = createSignal<HTMLDivElement>();
  const [isChildVisible, setIsChildVisible] = createSignal(false);
  const [add] = createIntersectionObserver(
    [],
    ([entry]) => {
      if (entry.intersectionRatio > 0) {
        setIsChildVisible(true);
        properties?.onEnter?.();
      }
    },
    {
      root: undefined,
      rootMargin: '400px',
      threshold: 0,
    }
  );
  createEffect(() => {
    const reference = divReference();
    isDefined<HTMLDivElement>(reference) && add(reference);
  });

  return (
    <Show
      when={isChildVisible()}
      fallback={
        <div
          class="solid-social-placeholder"
          style={{ height: properties_.height, width: '100%' }}
        />
      }
    >
      <div
        ref={setDivReference}
        class="solid-social-observer"
        {...createTestId('general-observer')}
      >
        {properties_.children}
      </div>
    </Show>
  );
};
