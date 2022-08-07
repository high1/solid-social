import { JSX, mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleLinkedInLoad } from './utilities';
import { createTestId } from '../../utilities';

export type LinkedInProperties = {
  /** LinkedIn username */
  username: string;
  /** The type of badge */
  badgeType?: 'horizontal' | 'vertical';
  /** The size of the badge */
  badgeSize?: 'medium' | 'large';
  /** The badge theme */
  theme?: 'light' | 'dark';
  /** data-locale */
  locale?: string;
};

export const LinkedInBadge = (properties: LinkedInProperties): JSX.Element => {
  const properties_ = mergeProps(
    {
      badgeType: 'vertical',
      badgeSize: 'medium',
      theme: 'light',
      locale: 'en_US',
    },
    properties
  );
  return (
    <GeneralObserver onEnter={handleLinkedInLoad}>
      <div
        {...createTestId('linkedin-badge')}
        class="LI-profile-badge linkedin-badge"
        data-version="v1"
        data-size={properties_.badgeSize}
        data-locale={properties_.locale}
        data-type={properties_.badgeType}
        data-theme={properties_.theme}
        data-vanity={properties_.username}
      >
        <a
          class="LI-simple-link"
          href={`//uk.linkedin.com/in/${properties_.username}?trk=profile-badge`}
        >
          Loading
        </a>
      </div>
    </GeneralObserver>
  );
};
