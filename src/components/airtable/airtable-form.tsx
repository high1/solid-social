import { GeneralObserver } from '../general-observer';
import type { Component } from 'solid-js';

export type AirtableFormProps = {
  /** Airtable Form ID */
  airtableFormId: string;
};

export const AirtableForm: Component<AirtableFormProps> = (props) => (
  <GeneralObserver>
    <div class="airtable-form-solid-social" style={{ position: 'relative' }}>
      <iframe
        class="airtable-form"
        title={`airtable-${props.airtableFormId}`}
        src={`//airtable.com/embed/${props.airtableFormId}?backgroundColor=green`}
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    </div>
  </GeneralObserver>
);
