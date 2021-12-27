import { createScriptLoader } from '@solid-primitives/script-loader';

let isLinkedInScriptAdded = false;
export const linkedInClasses = [`.LI-profile-badge`, `.LI-simple-link`].join(`,`);
const linkedInBadgesUrl = `https://platform.linkedin.com/badges/js/profile.js`;

const LIRenderAll = (): void | unknown =>
  window.LI && typeof window.LIRenderAll === `function` && window.LIRenderAll();

export const handleLinkedInLoad = (): { status: 'createScriptLoader' | 'LILoad' } => {
  if (document.querySelector(linkedInClasses) && !isLinkedInScriptAdded) {
    createScriptLoader({ src: linkedInBadgesUrl });
    isLinkedInScriptAdded = true;
    return {
      status: 'createScriptLoader',
    };
  }

  LIRenderAll();
  return {
    status: 'LILoad',
  };
};
