import { JSX } from 'solid-js';
import { GeneralObserver } from 'components/general-observer';
import { createTestId } from 'utilities';

export type AirtableFormProperties = {
  /** Airtable Form ID */
  airtableFormId: string;
};

export const AirtableForm = (properties: AirtableFormProperties): JSX.Element => (
  <GeneralObserver>
    <div style={{ position: 'relative' }}>
      <iframe
        {...createTestId('airtable-form')}
        title={`airtable-${properties.airtableFormId}`}
        src={`https://airtable.com/embed/${properties.airtableFormId}?backgroundColor=green`}
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    </div>
  </GeneralObserver>
);
