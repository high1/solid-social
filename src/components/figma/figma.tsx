import { mergeProps, Show } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type FigmaProps = {
  /** Height for the iFrame. Defaults to 450px */
  height?: number;
  /**
   * A title for your embed which is used for the iframe
   */
  title: string;
  /**
   * The url to the file or frame. Make sure to include the node-id if present
   */
  url: string;
};

export const Figma: Component<FigmaProps> = (propes) => {
  const props_ = mergeProps(
    {
      height: 450,
    },
    propes
  );
  const regex = /(file|proto)\/([\dA-Za-z]{22,128})(?:\/.*)?$/;
  return (
    <Show when={regex.test(props_.url)}>
      <GeneralObserver height={props_.height}>
        <iframe
          title={`figma-${props_.title}`}
          class="figma"
          height={props_.height}
          style={{
            width: '100%',
          }}
          src={`//www.figma.com/embed?embed_host=mdx-embed&url=https://www.figma.com/${props_.url}`}
          allowfullscreen
        />
      </GeneralObserver>
    </Show>
  );
};
