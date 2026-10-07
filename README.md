<div align="center">

# Blubirch Delivery Verification System

**Verify inbound deliveries against the expected box list — in the browser, on the device, with no backend.**

[![Live](https://img.shields.io/badge/app-live-2ea44f?style=flat-square)](https://atharvguitarist.github.io/delivery-verification/)
[![Status](https://img.shields.io/badge/status-production-blue?style=flat-square)](#)
[![Platform](https://img.shields.io/badge/platform-web%20%7C%20mobile-lightgrey?style=flat-square)](#browser-support)
[![Data](https://img.shields.io/badge/data-on--device%20only-success?style=flat-square)](#data-handling--privacy)
[![License](https://img.shields.io/badge/license-proprietary-red?style=flat-square)](#license)

[**Open the app →**](https://atharvguitarist.github.io/delivery-verification/)

</div>

---

## Overview

The Delivery Verification System lets receiving staff reconcile what a driver *says* was delivered with what the warehouse *expected* to receive.

The operator uploads the expected delivery list (Excel/CSV), photographs the driver's printed box list, and the app reads the box numbers on-device using OCR, compares both lists, and produces a clear **arrived / not arrived / unexpected** result that can be exported as Excel or PDF.

It is a single static web application: **no server, no database, no accounts and no paid services.** All processing happens inside the user's browser.

## Key features

| Capability | Details |
|---|---|
| **Expected list import** | Excel (`.xlsx`/`.xls`) or CSV, one box number per row. Column auto-detection with manual override, and warnings when box numbers have been stored as rounded numeric values. |
| **On-device OCR** | Photographs of the driver's printed list are read locally with Tesseract (WebAssembly, LSTM model bundled). Line detection, strip-level reading and fuzzy matching (edit distance, nearest-match) to tolerate print and camera noise. |
| **Reconciliation** | Side-by-side comparison of expected vs. received box numbers with per-item status and diff highlighting. |
| **Scan-first workflow** | Scanning can start before the expected list is available; the comparison runs as soon as the list is uploaded. |
| **Reports** | Export the result as **Excel** or **PDF**, copy the not-arrived list, or copy the driver's list as a soft copy. |
| **Recent scans** | Sessions are saved on the device (IndexedDB) and can be reopened later. |
| **Responsive UI** | Works on warehouse handsets and laptops, with light and dark themes. |

## How it works

```
 Expected list (Excel/CSV) ──┐
                             ├──►  Normalise & match  ──►  Result  ──►  Excel / PDF / clipboard
 Driver's list (photos) ─OCR─┘     (fuzzy, on-device)      arrived · not arrived · unexpected
```

1. **Upload the expected list** — choose the column that holds the box numbers.
2. **Photograph the driver's list** — one photo per page, flat and well lit.
3. **Review the result** — confirm any low-confidence reads, then export or copy the outcome.

## Data handling & privacy

- **Nothing is uploaded.** Excel files and photos are processed entirely in the browser.
- **Local storage only.** Recent scans live in the browser's IndexedDB on the device that created them. They are not synced between devices and are lost if the browser's site data is cleared — **download the Excel report for anything that must be retained.**
- **Third-party requests** are limited to static assets: Google Fonts and the SheetJS Excel library (cdnjs). The first visit therefore requires an internet connection.
- No analytics, tracking or cookies are used by the application.

## Browser support

| Browser | Status |
|---|---|
| Chrome / Edge (desktop & Android) | ✅ Recommended |
| Safari (macOS & iOS) | ✅ Supported |
| Firefox | ⚠️ Works; not the primary target |
| In-app / embedded web views | ❌ OCR engine may fail to start — open in Chrome or Safari |

A modern browser with WebAssembly support is required.

## Project structure

```
.
├── index.html     # The complete application (UI, logic, styles)
├── tess/          # Tesseract OCR engine (WASM builds) and English LSTM model
├── lib/           # jsPDF + AutoTable for PDF report generation
└── .nojekyll      # Serve files as-is on GitHub Pages
```

## Deployment

The app is deployed with **GitHub Pages** from the `main` branch, root folder.

| Setting | Value |
|---|---|
| Source | Deploy from a branch |
| Branch | `main` / `(root)` |
| URL | https://atharvguitarist.github.io/delivery-verification/ |

Every change merged into `main` is published automatically within about a minute. To run locally, serve the folder with any static file server (opening `index.html` directly from disk will not load the OCR worker):

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Change control

`main` is the production branch and is **protected**:

- Direct pushes, force pushes and branch deletion are blocked.
- All changes go through a pull request and require approval from the repository owner.
- Ownership of every file is assigned to the maintainer via `CODEOWNERS`.

External contributions are not accepted. Please do not open pull requests unless you have been asked to.

## Security

Please **do not** report security issues through public GitHub issues. See [SECURITY.md](SECURITY.md) for how to report a vulnerability privately.

## License

Copyright © 2026 [@atharvguitarist](https://github.com/atharvguitarist). All rights reserved.

This repository is publicly visible for hosting purposes only. No licence is granted to use, copy, modify or distribute the code without prior written permission.

### Third-party components

| Component | License |
|---|---|
| [Tesseract.js](https://github.com/naptha/tesseract.js) | Apache-2.0 |
| [jsPDF](https://github.com/parallax/jsPDF) | MIT |
| [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) | MIT |
| [SheetJS Community Edition](https://sheetjs.com) | Apache-2.0 |
