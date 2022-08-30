import { mergeProps } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

const scriptUrl = '//snack.expo.io/embed.js';

export type SnackProps = {
  /** The usename and snack id */
  snackId: string;
  /** Platform */
  platform?: 'web' | 'android' | 'ios' | 'mydevice';
  /** The snack theme */
  theme?: 'light' | 'dark';
};

export const Snack: Component<SnackProps> = (props) => {
  const props_ = mergeProps(
    {
      platform: 'web',
      theme: 'light',
    },
    props
  );
  return (
    <GeneralObserver onEnter={() => createScriptLoader({ src: scriptUrl })}>
      <div
        class="snack"
        data-snack-id={props_.snackId}
        data-snack-platform={props_.platform}
        data-snack-preview="true"
        data-snack-theme={props_.theme}
        style={{
          overflow: 'hidden',
          background: '#F9F9F9',
          border: '1px solid var(--color-border)',
          'border-radius': '4px',
          height: '505px',
          width: '100%',
        }}
      />
    </GeneralObserver>
  );
};
