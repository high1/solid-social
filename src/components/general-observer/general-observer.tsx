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
  const [observerReference, setObserverReference] = createSignal<HTMLDivElement>();
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
    const reference = observerReference();
    isDefined<HTMLDivElement>(reference) && add(reference);
  });

  return (
    <div
      ref={setObserverReference}
      class="solid-social-observer"
      {...createTestId('general-observer')}
    >
      <Show
        when={isChildVisible()}
        fallback={
          <div
            class="solid-social-placeholder"
            style={{ height: properties_.height, width: '100%' }}
          />
        }
      >
        {properties_.children}
      </Show>
    </div>
  );
};
