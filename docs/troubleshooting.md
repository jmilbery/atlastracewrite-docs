---
sidebar_position: 7
title: Troubleshooting & FAQ
---

# Troubleshooting & FAQ

## Speech & Microphone

### The microphone button is dimmed and I can't tap it

AtlasTraceWrite needs microphone and speech recognition permissions. Go to your iPad's **Settings > AtlasTraceWrite** and make sure both **Microphone** and **Speech Recognition** are enabled.

If you're on a managed iPad (school or family device), your administrator may need to allow these permissions.

### I never saw a permission dialog

Permissions are requested the first time you tap the microphone button. If the dialog didn't appear, try restarting the app. If permissions were previously denied, you'll need to enable them manually in **Settings > AtlasTraceWrite**.

### The microphone stops listening after a pause

Apple's speech recognizer may stop after roughly 60 seconds of silence. AtlasTraceWrite automatically restarts the recognizer when this happens, so you can keep speaking. If it does stop, tap the microphone button to resume.

### Words appear with a delay

This is normal behavior. The speech recognizer waits briefly to hear complete words before displaying them. Speak in natural phrases and the text will catch up.

## Worksheets & PDF

### The text doesn't fit on one page

If your text is longer than what fits on a single page, the worksheet will automatically span multiple pages. Each page has the correct ruled lines.

### The traceable letters are too light (or too dark)

Open **Settings** (gear icon) and adjust the **Letter Darkness** slider. Move it left for darker letters or right for lighter letters.

### The font doesn't match how my student learns to write

Check the **Font Style** setting. **Lexend** (the default) uses single-story "a" and "g" letterforms that match standard handwriting instruction. **Sassoon Infant** is another good option — it was designed specifically for teaching handwriting. SF Pro Rounded and Raleway use double-story forms that may not match what your student is learning.

### I want dotted outlines instead of solid letters

Open **Settings** and change the **Letter Style** from Solid Fill to **Dotted Outline**. This renders the traceable letters as dashed outlines instead of filled shapes.

### The ruled lines are too big or too small

Change the **Grade Level** in Settings. Grade 1 has the largest lines (5/8"), and Grades 3–4 have the smallest (3/8").

## Printing

### I don't see my printer

Make sure your printer supports **AirPrint** and is on the same Wi-Fi network as your iPad. Check your printer manufacturer's website for AirPrint compatibility.

### The worksheet prints too small

Make sure your print settings use **US Letter** (8.5" x 11") paper and that scaling is set to **100%** (not "fit to page").

### Can I save without printing?

Yes — use the **Save** button (arrow into document icon) to save the worksheet as a PDF file, or use the **Share** button to send it via AirDrop, email, or save to a cloud service.

## Data & Privacy

### Does AtlasTraceWrite store my recordings?

No. Audio is processed in real time by Apple's speech recognizer and is not stored. Only the transcribed text is kept in the app during your session.

### Does the app send data to external servers?

Speech recognition uses Apple's built-in framework, which may process audio on-device or via Apple's servers depending on your device and iOS version. AtlasTraceWrite does not send any data to third-party servers.

### What data is saved on my device?

Only your settings preferences (grade level, font style, letter style, letter darkness) are saved between sessions using standard device storage. No worksheet content, text, or PDFs are retained after you close the app.

## Device Requirements

### Does AtlasTraceWrite work on iPhone?

AtlasTraceWrite is designed for **iPad only**. It is not available on iPhone.

### Does it work on Mac?

Not currently. AtlasTraceWrite uses iOS-only features (speech recognition, audio session, AirPrint) that don't run on Mac. Mac support may be added in a future update.

### What iOS version do I need?

iOS 17 or later is required.

### The app doesn't work on my managed iPad

School-managed or family iPads with content restrictions may block microphone access for apps installed outside the App Store (such as during testing). The app should work normally when installed via the App Store or TestFlight.

## Contact Support

If you're experiencing an issue not covered here, visit our [Support page](https://jmilbery.github.io/AtlasOne/support.html) for contact information.
