import { Component, createSignal, getOwner, mergeProps, runWithOwner, Show } from 'solid-js';
import { createIntersectionObserver } from '@solid-primitives/intersection-observer';
import { createTestId } from 'utilities';

type GeneralObserverProperties = {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
  /** The height of the placeholder div before the component renders in */
  height?: number;
};

export type HTMLEventName = keyof HTMLElementEventMap;

export const GeneralObserver: Component<GeneralObserverProperties> = (properties) => {
  const properties_ = mergeProps({ height: 0 }, properties);
  const owner = getOwner();
  let observerReference!: HTMLDivElement;
  const [isVisible, setVisible] = createSignal(false);
  createIntersectionObserver(
    () => [observerReference],
    ([entry]) =>
      entry.intersectionRatio > 0 &&
      setVisible(true) &&
      owner &&
      runWithOwner(owner, () => properties_.onEnter?.()),
    {
      root: undefined,
      rootMargin: '400px',
      threshold: 0,
    }
  );

  return (
    <div
      ref={observerReference}
      class={`observer-solid-social`}
      {...createTestId('general-observer')}
    >
      <Show
        when={isVisible()}
        fallback={
          <div
            class="placeholder-solid-social"
            style={{ height: properties_.height, width: '100%' }}
          />
        }
      >
        {properties_.children}
      </Show>
    </div>
  );
};
