import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type CodePenProps = {
  /** CodePen id */
  codePenId: string;
  /** Height for the iFrame */
  height?: number;
  /** Which tabs to display */
  tabs?: string[] | 'js' | 'css' | 'scss' | 'less' | 'result';
  /** Load pen in a preview state? **/
  clickToLoad?: boolean;
  /** Make the CodePen editable **/
  editable?: boolean;
  /** Theme of the CodePen **/
  theme?: string | 'light' | 'dark' | 'default';
};

export const CodePen: Component<CodePenProps> = (props) => {
  const props_ = mergeProps(
    {
      height: 500,
      tabs: 'result',
      clickToLoad: false,
      editable: false,
      theme: 'default',
    },
    props
  );
  return (
    <GeneralObserver height={props_.height}>
      <iframe
        title={`codepen-${props_.codePenId}`}
        class="codepen"
        height={props_.height}
        style={{
          width: '100%',
        }}
        src={`//codepen.io/team/codepen/embed${props_.clickToLoad ? '/preview' : ''}/${
          props_.codePenId
        }?height=265&theme-id=${props_.theme}&default-tab=${props_.tabs.toString()}${
          props_.editable ? '&editable=true' : ''
        }`}
        allowfullscreen
      />
    </GeneralObserver>
  );
};
