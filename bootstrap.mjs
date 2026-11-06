import {attachFrogSession} from './session.mjs';
const buildId = 'b99776f4a432db00fd8bdacd2d99c5ac9965ca00';

let shellOrigin;
try { shellOrigin = new URL(document.referrer).origin; } catch {}
if (parent !== window && (shellOrigin === location.origin ||
    /^https:\/\/(?:[a-z0-9-]+\.)?bt-vocabulary-platform-staging\.pages\.dev$/.test(shellOrigin))) {
  attachFrogSession({engine:window.BTFrog, policy:{shellOrigin,engineOrigin:location.origin,buildId}});
}
