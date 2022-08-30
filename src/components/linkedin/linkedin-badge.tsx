import { mergeProps } from 'solid-js';
import { GeneralObserver } from '../general-observer';
import { handleLinkedInLoad } from './utilities';
import type { Component } from 'solid-js';

export type LinkedInBadgeProps = {
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

export const LinkedInBadge: Component<LinkedInBadgeProps> = (props) => {
  const props_ = mergeProps(
    {
      badgeType: 'vertical',
      badgeSize: 'medium',
      theme: 'light',
      locale: 'en_US',
    },
    props
  );
  return (
    <GeneralObserver onEnter={handleLinkedInLoad}>
      <div
        class="LI-profile-badge linkedin-badge"
        data-version="v1"
        data-size={props_.badgeSize}
        data-locale={props_.locale}
        data-type={props_.badgeType}
        data-theme={props_.theme}
        data-vanity={props_.username}
      >
        <a
          class="LI-simple-link"
          href={`//uk.linkedin.com/in/${props_.username}?trk=profile-badge`}
        >
          Loading
        </a>
      </div>
    </GeneralObserver>
  );
};
