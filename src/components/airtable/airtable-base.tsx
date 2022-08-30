import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type AirtableBaseProps = {
  /** Airtable Base ID */
  airtableBaseId: string;
  /** Layout type */
  layout?: 'card' | '';
  /** View Controls */
  viewControls?: 'on' | 'off';
};

export const AirtableBase: Component<AirtableBaseProps> = (props) => {
  const props_ = mergeProps(
    {
      layout: '',
      viewControls: 'on',
    },
    props
  );
  return (
    <GeneralObserver>
      <div class="airtable-base-solid-social" style={{ position: 'relative' }}>
        <iframe
          class="airtable-base"
          title={`airtable-${props_.airtableBaseId}`}
          src={`//airtable.com/embed/${props_.airtableBaseId}?backgroundColor=green&${
            !props_.layout ? `` : `layout=${props_.layout}&`
          }viewControls=${props_.viewControls}`}
          width="100%"
          height="533"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        />
      </div>
    </GeneralObserver>
  );
};
