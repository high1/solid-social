import { createScriptLoader } from '@solid-primitives/script-loader';

export const pinterestClasses = ['pinterest-pin', 'pinterest-board', 'pinterest-follow-button']
  .map((pinClass) => `.${pinClass}`)
  .join(',');

const pinterestEmbedScript =
  '!function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"//assets.pinterest.com/js/pinit_main.js"});';

export const handlePinterestBuild = (): void => {
  if (document.querySelector(pinterestClasses) && !window.PinUtils) {
    createScriptLoader({ src: pinterestEmbedScript });
    return;
  }
  window?.PinUtils?.build();
};
