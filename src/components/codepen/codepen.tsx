import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { createTestId } from '../../utilities';

export type CodePenProperties = {
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

export const CodePen = (properties: CodePenProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      height: 500,
      tabs: 'result',
      clickToLoad: false,
      editable: false,
      theme: 'default',
    },
    properties
  );
  return (
    <GeneralObserver height={properties_.height}>
      <iframe
        {...createTestId('codepen')}
        title={`codepen-${properties_.codePenId}`}
        class="codepen"
        height={properties_.height}
        style={{
          width: '100%',
        }}
        src={`//codepen.io/team/codepen/embed${properties_.clickToLoad ? '/preview' : ''}/${
          properties_.codePenId
        }?height=265&theme-id=${properties_.theme}&default-tab=${properties_.tabs.toString()}${
          properties_.editable ? '&editable=true' : ''
        }`}
        allowfullscreen
      />
    </GeneralObserver>
  );
};
