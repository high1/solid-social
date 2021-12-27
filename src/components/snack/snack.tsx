import { JSX, mergeProps } from 'solid-js';
import { createScriptLoader } from '@solid-primitives/script-loader';
import { GeneralObserver } from '../general-observer';
import { createTestId } from 'utilities';

const scriptUrl = '//snack.expo.io/embed.js';

export interface ISnackProperties {
  /** The usename and snack id */
  snackId: string;
  /** Platform */
  platform?: 'web' | 'android' | 'ios' | 'mydevice';
  /** The snack theme */
  theme?: 'light' | 'dark';
}

export const Snack = (properties: ISnackProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      platform: 'web',
      theme: 'light',
    },
    properties
  );
  return (
    <GeneralObserver onEnter={() => createScriptLoader({ src: scriptUrl })}>
      <div
        class="snack-solid-social"
        {...createTestId('snack')}
        data-snack-id={properties_.snackId}
        data-snack-platform={properties_.platform}
        data-snack-preview="true"
        data-snack-theme={properties_.theme}
        style={{
          overflow: 'hidden',
          background: '#F9F9F9',
          border: '1px solid var(--color-border)',
          borderRadius: '4px',
          height: '505px',
          width: '100%',
        }}
      ></div>
    </GeneralObserver>
  );
};
