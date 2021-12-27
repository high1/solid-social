import { JSX } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type CodeSandboxProperties = {
  /** CodeSandbox id */
  codeSandboxId: string;
};

export const CodeSandbox = (properties: CodeSandboxProperties): JSX.Element => (
  <GeneralObserver>
    <iframe
      {...createTestId('codesandbox')}
      title={`codeSandbox-${properties.codeSandboxId}`}
      class="codesandbox-solid-social"
      src={`https://codesandbox.io/embed/${properties.codeSandboxId}`}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        borderRadius: '4px',
        overflow: 'hidden',
      }}
    />
  </GeneralObserver>
);
