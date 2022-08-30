import { createSignal, getOwner, mergeProps, runWithOwner, Show } from 'solid-js';
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
  let observerReference!: HTMLDivElement;
  const [isVisible, setVisible] = createSignal(false);
  createIntersectionObserver(
    () => [observerReference],
    ([entry]) =>
      entry.intersectionRatio > 0 &&
      setVisible(true) &&
      owner &&
      runWithOwner(owner, () => props.onEnter?.()),
    {
      root: undefined,
      rootMargin: '400px',
      threshold: 0,
    }
  );

  return (
    <div ref={observerReference} class={`observer-solid-social`}>
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
