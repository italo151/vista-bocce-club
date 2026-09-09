# Vista Bocce Club — V4 Launch Candidate

This package is the consolidated launch candidate built from the approved V4 decisions and the corrected V4.1 baseline.

## Locked branding
- Header uses the exact approved V3 large horizontal logo: `assets/vista-bocce-club-horizontal-logo.png`.
- Do not replace, redraw, recolor, crop or reinterpret this asset without explicit approval.

## Launch-ready front-end features
- Responsive desktop/mobile navigation.
- Home, Play, Events, Courts, Vista 10/10, Membership, About, Sponsors, FAQ and Join sections.
- Netlify-compatible `club-interest` form with honeypot spam field.
- Accurate distinction between public courts and club-controlled activities.
- Future programs are identified as planned rather than presented as operational.

## Intentionally not live yet
Member authentication, online dues/payments, SMS delivery, tournament registration backend, rankings, live scoring/brackets, streaming, player profiles and a private merchandise store require later implementation. The launch site does not claim those systems are operational.

## Deployment
The package has no `netlify.toml`. If the current GitHub repository is already connected to Netlify, replace the site files with these contents and make one commit after review. Netlify should detect the HTML form during deployment.
