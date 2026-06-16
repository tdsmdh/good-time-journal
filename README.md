# 📓 Good Time Journal (Designing Your Life)

A privacy-first, open-source web application designed to help you track your daily activities, energy levels, and engagement. Inspired by the foundational "Good Time Journal" exercise from the #1 New York Times Bestseller *Designing Your Life* by Bill Burnett and Dave Evans.

This tool replaces the traditional pen-and-paper worksheet with a tactile, responsive, cross-platform web app that works flawlessly on your laptop and your phone.

Vibe coded using Google Gemini.

## ✨ Features

* **Zero-Friction Logging:** Quickly log activities, employers/contexts, and AEIOU reflections.
* **Smart Auto-Complete:** The app learns your common activities and employers over time, providing instant drop-down suggestions to save you keystrokes.
* **Tactile Metric Levers:** Ditch arbitrary percentages. Use responsive, color-coded sliders to track your **Engagement** (Cyan) and **Energy Battery** (Magenta).
* **Flow State Tracking:** A dedicated toggle to mark those rare, highly immersive moments where you completely lose track of time.
* **Dual-Mode UI:** Features a beautifully designed App Shell architecture with an independent logging interface and a searchable historical ledger.
* **Dark Mode:** Fully responsive dark/light themes tailored for iOS and macOS environments.

## 🔒 Privacy & Architecture (Local-First)

This application requires **no servers, no accounts, and no paid databases.** It is built using a purely local-first architecture (Vanilla HTML, JS, and Tailwind CSS).

By default, everything you log is securely stored inside your own browser's `localStorage`. I cannot see your data, and no third-party company can either. 

## 🚀 How to Use This App

You can use this app in two ways: **Offline** or **Cloud-Synced**. 

### Method A: The Local Sandbox (Zero Setup)
Want to just try it out? You don't even need to download anything.
1. Visit the live site here: `[Insert your GitHub Pages URL here]`
2. Start logging. Your data will save automatically to your current browser.
3. Use the **Settings ⚙️** menu to export/import your data via a `.json` file if you want to manually move it to another device.

### Method B: Live Cross-Device Sync (Google Sheets)
Want to use the app on your Mac and your iPhone seamlessly? You can plug in your own private Google Sheet to act as your free cloud database.

**Step 1: Set up the Database**
1. Create a blank Google Sheet and name the first tab `JournalLogs`.
2. Add these exact headers to row 1 (A through J): `Date`, `Time`, `Day`, `Employer`, `Header`, `Desc`, `Engagement`, `Energy`, `Flow`, `Reflection`.
3. Go to **Extensions -> Apps Script** and paste in the backend code (found in the `apps-script.js` file of this repo, or contact me for it).
4. Click **Deploy -> New deployment -> Web app**. Set access to **"Anyone"**.
5. Copy the resulting **Web App URL**.

**Step 2: Connect the App**
1. Open the Good Time Journal app on your phone or laptop.
2. Click the **⚙️ Settings** icon in the top right.
3. Paste your Web App URL into the **Live Google Sheets Sync** box and click **Connect**.
4. Repeat for any other devices. You are now syncing live!

## 📱 Make it a Native App
* **iPhone:** Open the link in Safari, tap the Share icon, and select **Add to Home Screen**.
* **Mac:** Open the link in Safari, go to the top menu, and select **File -> Add to Dock...**

---

### ⚖️ Disclaimer
*This is an independent, open-source utility built to help individuals apply life-design principles. It is based entirely on the concepts, frameworks, and exercises from the book **Designing Your Life**. All rights to the core methodology, terminology, and exercises are reserved by the original authors, Bill Burnett and Dave Evans.*
