import { createSignal, createEffect, getOwner, mergeProps, on, runWithOwner, Show } from 'solid-js';
import { createIntersectionObserver } from '@solid-primitives/intersection-observer';
import type { ParentComponent } from 'solid-js';

export type GeneralObserverProps = {
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void;
  /** The height of the placeholder div before the component renders in */
  height?: number;
};

export type HTMLEventName = keyof HTMLElementEventMap;

export const GeneralObserver: ParentComponent<GeneralObserverProps> = (props) => {
  const props_ = mergeProps({ height: 0 }, props);
  const owner = getOwner();
  const [observerReference, setObserverReference] = createSignal<HTMLDivElement>();
  const [isVisible, setVisible] = createSignal(false);
  createEffect(
    on(observerReference, () => {
      const element = observerReference();
      element &&
        createIntersectionObserver(
          () => [element],
          ([entry]) => {
            if (entry.intersectionRatio > 0 && owner) {
              setVisible(true);
              runWithOwner(owner, () => props.onEnter?.());
            }
          },
          {
            root: undefined,
            rootMargin: '400px',
            threshold: 0,
          }
        );
    })
  );

  return (
    <div ref={setObserverReference} class={`observer-solid-social`}>
      <Show
        when={isVisible()}
        fallback={
          <div
            class="placeholder-solid-social"
            style={{
              width: '100%',
              ...(props_.height && { height: `${props_.height}px` }),
            }}
          />
        }
      >
        {props_.children}
      </Show>
    </div>
  );
};
