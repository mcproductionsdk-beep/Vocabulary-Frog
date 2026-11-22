import {attachFrogSession} from './session.mjs';
const buildId = '287ed06b8f84e879d7a0611bf274ff5e5fab8ae6';

let shellOrigin;
try { shellOrigin = new URL(document.referrer).origin; } catch {}
if (parent !== window && (shellOrigin === location.origin ||
    /^https:\/\/(?:[a-z0-9-]+\.)?bt-vocabulary-platform-staging\.pages\.dev$/.test(shellOrigin))) {
  attachFrogSession({engine:window.BTFrog, policy:{shellOrigin,engineOrigin:location.origin,buildId}});
}
