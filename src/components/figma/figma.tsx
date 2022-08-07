import { JSX, mergeProps, Show } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { createTestId } from '../../utilities';

export type FigmaProperties = {
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

export const Figma = (properties: FigmaProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      height: 450,
    },
    properties
  );
  const regex = /(file|proto)\/([\dA-Za-z]{22,128})(?:\/.*)?$/;
  return (
    <Show when={regex.test(properties_.url)}>
      <GeneralObserver height={properties_.height}>
        <iframe
          {...createTestId('figma')}
          title={`figma-${properties_.title}`}
          class="figma"
          height={properties_.height}
          style={{
            width: '100%',
          }}
          src={`//www.figma.com/embed?embed_host=mdx-embed&url=https://www.figma.com/${properties_.url}`}
          allowfullscreen
        />
      </GeneralObserver>
    </Show>
  );
};
