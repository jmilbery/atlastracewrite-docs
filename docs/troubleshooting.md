---
sidebar_position: 8
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

Check the **Font Style** setting. **Sassoon Infant** (the default) was designed by Dr. Rosemary Sassoon specifically for teaching children to write — single-story "a" and "g," visible entry and exit strokes that mimic pen flow. **Lexend** is a free alternative with single-story "a" and is optimized for reading fluency; a fine choice if you prefer it. SF Pro Rounded and Raleway use forms that may not match standard handwriting instruction.

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

Your settings preferences (grade level, font style, letter style, letter darkness, letter spacing, cursor width), your draft text, and any **saved documents** from [My Documents](my-documents) are saved locally between sessions using standard device storage. No PDFs or audio recordings are retained. Your draft text is automatically cleared when you tap the X (clear) button; saved documents are only deleted when you delete them from the library.

## Device Requirements

### Does AtlasTraceWrite work on iPhone?

AtlasTraceWrite is designed for **iPad only**. It is not available on iPhone.

### Does it work on Mac?

Not yet. AtlasTraceWrite uses iOS-only features (speech recognition, audio session, AirPrint) that require adaptation for macOS. Mac Catalyst support is planned for a future update.

### What iOS version do I need?

iOS 17 or later is required.

### The app doesn't work on my managed iPad

School-managed or family iPads with content restrictions may block microphone access for apps installed outside the App Store (such as during testing). The app should work normally when installed via the App Store or TestFlight.

## Saved Documents

### Where are my saved documents?

Saved documents live in the app's private storage on your iPad. Tap the **folder button** in the Speak step to see the list. See [My Documents](my-documents) for full details.

### Can I sync saved documents across iPads?

Not yet — each iPad maintains its own library. iCloud sync is planned for a future release. For now, if you want to share a worksheet across devices, save it as a PDF and use Files or email.

### Can I recover a deleted document?

No. Deletes are permanent. If you frequently re-use a document, use **Save as Copy** to fork a working version before experimenting.

### My text disappeared after loading a saved document

Loading a saved document **replaces** the current text. If you had unsaved changes to another document, they're gone. In the next release we're adding a confirmation prompt before destructive loads.

## Coming Soon

### Guided Spell Check

The next release adds a dedicated **Check Spelling** button — a step-through wizard designed for kids:

- Find each misspelled word automatically
- Show the word highlighted in context
- Offer the top 3 suggestions as big, tap-friendly buttons
- "Keep as-is" button for correct words the system doesn't recognize (like student names)
- Persistent "this word is OK" so known proper nouns stop flagging

Target release: next v1.2 update after tester feedback.

### iCloud Sync for Saved Documents

Cross-iPad sync for the [My Documents](my-documents) library — a teacher could save worksheets on a home iPad and load them on a classroom iPad.

### Additional Fonts and Input Modes

Under consideration based on tester feedback. Tell us what you need.

## Contact Support

If you're experiencing an issue not covered here, visit our [Support page](https://jmilbery.github.io/AtlasOne/support.html) for contact information.
