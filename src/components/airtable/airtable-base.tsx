import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { createTestId } from '../../utilities';

export type AirtableBaseProperties = {
  /** Airtable Base ID */
  airtableBaseId: string;
  /** Layout type */
  layout?: 'card' | '';
  /** View Controls */
  viewControls?: 'on' | 'off';
};

export const AirtableBase = (properties: AirtableBaseProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      layout: '',
      viewControls: 'on',
    },
    properties
  );
  return (
    <GeneralObserver>
      <div class="airtable-base-solid-social" style={{ position: 'relative' }}>
        <iframe
          {...createTestId('airtable-base')}
          class="airtable-base"
          title={`airtable-${properties_.airtableBaseId}`}
          src={`//airtable.com/embed/${properties_.airtableBaseId}?backgroundColor=green&${
            !properties_.layout ? `` : `layout=${properties_.layout}&`
          }viewControls=${properties_.viewControls}`}
          width="100%"
          height="533"
          style={{ background: 'transparent', border: '1px solid #ccc' }}
        />
      </div>
    </GeneralObserver>
  );
};
