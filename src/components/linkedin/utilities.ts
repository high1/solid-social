import { createScriptLoader } from '@solid-primitives/script-loader';

export const linkedInClasses = ['.LI-profile-badge', '.LI-simple-link'].join(',');
const linkedInBadgesUrl = '//platform.linkedin.com/badges/js/profile.js';

const LIRenderAll = (): undefined | unknown =>
  window.LI && typeof window.LIRenderAll === 'function' && window.LIRenderAll();

export const handleLinkedInLoad = (): void => {
  if (document.querySelector(linkedInClasses) && !(window.LI && window.LIRenderAll))
    createScriptLoader({ src: linkedInBadgesUrl });
  else LIRenderAll();
};
