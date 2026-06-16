# 📓 Good Time Journal (Designing Your Life)
<p align="center">
  <img src="Good Time Journal - Desktop.png" width="600" alt="Desktop View">
  <br><br>
  <img src="Good Time Journal - Mobile.png" width="300" alt="Mobile View">
</p>

A privacy-first, open-source web application designed to help you track your daily activities, energy levels, and engagement. Inspired by the foundational "Good Time Journal" exercise from the #1 New York Times Bestseller Designing Your Life by Bill Burnett and Dave Evans.

✨ Features

Zero-Friction Logging: Quickly log activities, employers/contexts, and AEIOU reflections.

Smart Auto-Complete: The app learns your common activities and employers over time, providing instant drop-down suggestions.

Tactile Metric Levers: Track your Engagement (Cyan) and Energy Battery (Magenta) using interactive sliders.

Flow State Tracking: A dedicated toggle to mark moments where you completely lose track of time.

Dual-Mode UI: Independent logging interface and searchable historical ledger.

🤖 Vibe Coded with Gemini

This entire project—from the local-first architecture and Google Apps Script database to the responsive Tailwind CSS interface—was "vibe coded" in collaboration with Google's Gemini. It serves as a live example of how AI can help rapidly prototype and launch fully functional, open-source software by simply describing the desired UX and aesthetic vibe.

🔒 Privacy & Architecture (Local-First)

This application requires no servers, no accounts, and no paid databases. It is built using a purely local-first architecture. By default, everything you log is securely stored inside your own browser's localStorage.

🚀 How to Use This App

Method A: The Local Sandbox (Zero Setup)

Visit the live site here: [Insert your GitHub Pages URL here]

Start logging. Your data will save automatically to your current browser.

Method B: Live Cross-Device Sync (Google Sheets)

Use this if you want to sync logs between your phone and laptop using your own private Google Sheet.

Step 1: Set up the Database

Create a blank Google Sheet and name the first tab exactly JournalLogs.

Add these exact headers to row 1 (A through J): Date, Time, Day, Employer, Header, Desc, Engagement, Energy, Flow, Reflection.

Go to Extensions -> Apps Script in the top menu.

Delete the empty code, and paste in the backend code found in the apps-script.js file of this repository.

Click the Save icon.

Step 2: Deploy and Authorize

In Apps Script, click the blue Deploy button (top right) -> New deployment.

Click the gear icon next to "Select type" and choose Web app.

Set Execute as to Me and Who has access to Anyone. Click Deploy.

The Security Warning: Google will ask you to authorize access.

Click Authorize access. Select your account.

Click the small Advanced text link at the bottom.

Click Go to Untitled project (unsafe).

Click Allow.

Once authorized, copy the Web app URL that appears.

⚠️ Important Note on Updates:
If you ever change the code in your Apps Script file later, your existing URL will not automatically update. You must go to Deploy -> Manage deployments, click the pencil icon, and select "New version" from the dropdown menu to apply your changes to the live URL.

Step 3: Connect the App

Open the Good Time Journal app on your device.

Click the ⚙️ Settings icon in the top right.

Paste your Web app URL into the Live Google Sheets Sync box and click Connect Database.

⚖️ Disclaimer

This is an independent, open-source utility. It is based entirely on the concepts, frameworks, and exercises from the book Designing Your Life. All rights to the core methodology, terminology, and exercises are reserved by the original authors, Bill Burnett and Dave Evans.


***

Once you commit this change to your repository, your users will have the "Important Note on Updates" guide right in front of them, which should save them from the same "Connection Error" hurdle you just overcame!
