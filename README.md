# Blubirch Delivery Verification System

A static web app. It needs no server, database or paid service.

## Put it on GitHub Pages (free)

1. Create a new repository on GitHub (it must be public for free GitHub Pages).
2. Upload everything in this folder to the repository root: `index.html`, the `tess` folder, the `lib` folder and `.nojekyll`.
3. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. After a minute the app is live at `https://<your-username>.github.io/<repository-name>/`. Open that link on the handsets and laptops.

## Where the data lives

- Excel files and photos are read inside the browser. Nothing is uploaded anywhere.
- Recent scans (the button in the top bar) are stored in the browser on the device that made them (IndexedDB). They are not shared between devices,
  and they are lost if the browser's site data is cleared. Download the Excel report for anything you need to keep.
- The page loads fonts from Google Fonts and the Excel library from cdnjs, so the first visit needs internet.

## Files

- `index.html` - the whole app.
- `tess/` - the text-reading engine (Tesseract) and its model, so reading works on the device.
- `lib/` - the PDF report library.
