# DPWH RIS — the request form

This repo holds ONE app: the fuel requisition form that staff fill in, plus the
tracking page drivers open from their email.

## Put it online

1. New repository -> name it (for example `dpwh-ris-requester`) -> **Public**
   (free GitHub Pages needs public) -> Create.
2. Upload everything in this folder, at the top level. Do not nest it in
   another folder. The page must be a lowercase `index.html`.
3. Settings -> Pages -> Deploy from a branch -> main -> / (root) -> Save.
4. After a minute your address is:

       https://YOURNAME.github.io/dpwh-ris-requester/

## Connect it to Apps Script

The first time someone opens it, the app asks for the REQUESTER project's
`/exec` address and the office passcode, with a "Test my link" button. Both are
kept in that browser, so it is asked once per device and never again.

Pasting the Approver address here is caught and refused.

## Point the emails here

In the REQUESTER Apps Script project: Project Settings -> Script properties ->
`SITE_URL` = `https://YOURNAME.github.io/dpwh-ris-requester`
Then Deploy -> New version. Tracking links, "fix & resubmit" links and QR codes
all follow this address.

## Installing it

Open the address and the browser offers to install it as **RIS Slip**, with its
own icon and window. The approver app is a separate repo and installs as its
own app.

## No secrets live here

The Sheet, the PINs, the signatures and the passcode are all in Apps Script.
Never paste any of them into these files — this repo is public.

`sw.js` caches nothing on purpose: every screen needs live data from the Sheet,
and a stale saved copy would be worse than none.
