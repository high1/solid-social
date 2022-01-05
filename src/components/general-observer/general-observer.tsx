import { Component, createSignal, mergeProps, onCleanup, onMount } from 'solid-js';
import { createIntersectionObserver } from '@solid-primitives/intersection-observer';
import { createTestId } from 'utilities';

type GeneralObserverProperties = {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
  /** The height of the placeholder div before the component renders in */
  height?: number;
};

export const GeneralObserver: Component<GeneralObserverProperties> = (properties) => {
  const properties_ = mergeProps({ height: 0 }, properties);
  let observerReference!: HTMLDivElement;
  const [isChildVisible, setIsChildVisible] = createSignal(false);
  const [add, { remove }] = createIntersectionObserver(
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

  onMount(() => add(observerReference));

  onCleanup(() => remove(observerReference));

  return (
    <div
      ref={observerReference}
      class="solid-social-observer"
      {...createTestId('general-observer')}
    >
      {isChildVisible() ? (
        properties_.children
      ) : (
        <div
          class="solid-social-placeholder"
          style={{ height: properties_.height, width: '100%' }}
        />
      )}
    </div>
  );
};
