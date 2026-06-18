# GitHub Pages custom domain troubleshooting

This repository is intended to be served from GitHub Pages under the
`wcibmaths/student-hub` project path unless a custom domain is deliberately
configured.

## Current domain checklist

Use this checklist when diagnosing a browser redirect from
`http://wcibmaths.github.io/student-hub/` or
`https://wcibmaths.github.io/student-hub/` to
`https://maths.wellingtoncollege.ac.th/`.

1. Confirm there is no `CNAME` file in this repository root. A committed
   `CNAME` file is separate from the GitHub Pages Settings UI and will cause
   GitHub Pages to treat the listed hostname as the canonical custom domain.
2. Confirm the GitHub Pages **Custom domain** field is blank for both
   `wcibmaths/student-hub` and `wcibmaths/teacher-hub` if the goal is to use
   the default `wcibmaths.github.io` URLs.
3. If the custom domain is desired, configure it on only the repository that
   should own `maths.wellingtoncollege.ac.th`; do not configure the same custom
   domain on both project sites.
4. Ask school IT to confirm the DNS owner and the exact record:
   `maths.wellingtoncollege.ac.th CNAME wcibmaths.github.io`.
5. If browser behaviour differs from `curl`, test with response headers and DNS:
   `curl -I https://wcibmaths.github.io/student-hub/`,
   `curl -I https://maths.wellingtoncollege.ac.th/`, and
   `dig maths.wellingtoncollege.ac.th CNAME`.
6. Allow time for GitHub Pages' CDN cache to clear after removing or changing a
   custom domain. A stale browser redirect while direct fetches return content
   can be cache-related, especially soon after a Pages settings change.

## Replit note

The app scaffold still uses Replit development tooling, but the published
single-file GitHub Pages build should be controlled by the files in this repo
and GitHub Pages settings. If a Replit Deployment is also live, check Replit's
Domains/Deployment settings separately for any custom-domain redirect involving
`maths.wellingtoncollege.ac.th`.
