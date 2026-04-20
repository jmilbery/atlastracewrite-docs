---
sidebar_position: 2
title: Speech Input
---

# Speech Input

The Speak step is where you provide the text for your worksheet. You can use your voice, type with the keyboard, or pick from built-in templates.

## Using the Microphone

Tap the **blue microphone button** to start recording. Speak clearly and at a natural pace — your words appear on screen as they're recognized.

:::tip
Words may appear with a short delay. This is normal — the speech recognizer waits briefly to hear the full word before displaying it.
:::

### Recording Controls

While recording, two buttons appear:

- **Yellow pause button** — Pauses the recording without losing your text. Tap the microphone again to resume where you left off.
- **Red stop button** — Stops the recording. Your transcript becomes editable and a **Generate Worksheet** button appears.

After stopping, you can:
- Tap the **microphone** to resume recording and add more words
- Edit your text directly in the transcript area
- Use the **pencil icon menu** for formatting tools (see [Editing Text](editing-text))
- Tap **Generate Worksheet** to create your worksheet

### Recording States

| State | What's happening | Buttons visible |
|-------|-----------------|-----------------|
| **Idle (no text)** | Ready to record. | Mic, keyboard, templates (list icon), **My Documents (folder)** |
| **Idle (with text)** | Text from a previous session is loaded. | Mic, clear (X), edit (pencil icon), **My Documents (folder)** |
| **Recording** | Actively listening. | Pause, stop |
| **Paused** | Recording is paused, text is preserved. | Resume mic, stop |
| **Stopped** | Recording is finished. Text is editable. | Resume mic, clear (X), edit (pencil icon), **My Documents (folder)** |

:::tip
The **folder button** opens your saved documents library. It's hidden during recording to keep controls simple — it reappears as soon as you pause or stop. See [My Documents](my-documents).
:::

### Editable Transcript

When you stop recording or have existing text, the transcript area becomes a full text editor. You can tap anywhere to place your cursor, select text, and make changes. See [Editing Text](editing-text) for details on the formatting tools available.

## Using the Keyboard

Tap the **gray keyboard button** to switch to typing mode. A text editor appears where you can type or paste text directly.

From keyboard mode:
- Tap the **blue microphone button** to switch back to voice input
- Use the **list button** (orange) to insert a practice template
- Tap **Generate Worksheet** when you're done

## Text Preservation

Your text is preserved when you navigate back from a generated worksheet or when you open Settings. Tap **Start Over** to return to the Speak step — your text will still be in the editable area, ready to tweak and regenerate. Use the **X button** to explicitly clear text when you want to start fresh.

Your draft text is also **automatically saved** between sessions. If you close the app and reopen it later, your text will still be there. Tapping the **X button** clears the saved draft.

For text you want to keep around and reuse, use **My Documents** (the folder button) — see [My Documents](my-documents). Saved documents are separate from the auto-saved draft: saving a document doesn't remove it from the editor, and clearing the draft doesn't delete any saved documents.

## Privacy

Speech recognition is handled by Apple's built-in `SFSpeechRecognizer`. Depending on your device and iOS version, processing may happen on-device or via Apple's servers. No audio or text data is sent to third-party services.
