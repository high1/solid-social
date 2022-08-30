import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type CodeSandboxProps = {
  /** CodeSandbox id */
  codeSandboxId: string;
};

export const CodeSandbox: Component<CodeSandboxProps> = (props) => (
  <GeneralObserver>
    <iframe
      title={`codeSandbox-${props.codeSandboxId}`}
      class="codesandbox"
      src={`//codesandbox.io/embed/${props.codeSandboxId}`}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      style={{
        width: '100%',
        height: '500px',
        border: 0,
        'border-radius': '4px',
        overflow: 'hidden',
      }}
    />
  </GeneralObserver>
);
