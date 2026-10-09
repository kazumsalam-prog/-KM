<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/29a9356b-4a55-4df5-abf4-8e83b549dfa5

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Customer Orders and Store Printing

Customer orders are saved by the server and shared with the store's admin browser. Set
`ADMIN_PASSWORD` in the server environment (see [.env.example](./.env.example)); the
admin panel requires this password. For local development, run `npm run dev`. For a
deployed store, run the Express server with `npm start` after building the app.

Keep the admin panel open on the computer connected to the store printer. Enable
automatic printing in the admin orders tab to open that computer's browser print
dialog when a new order arrives. Browsers require confirmation in the print dialog
unless the computer is separately configured for kiosk printing.

Orders are stored in `data/orders.json` by default. Set `ORDER_STORE_PATH` to a
persistent file location when deploying, since the server must retain the same order
store between restarts and customer/admin requests.
