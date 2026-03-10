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
- **Red stop button** — Stops the recording. Your transcript is preserved and a **Use This Text** button appears.

After stopping, you can:
- Tap the **microphone** to resume recording and add more words
- Tap **Use This Text** to move to the Edit step

### Recording States

| State | What's happening |
|-------|-----------------|
| **Idle** | Ready to record. Mic button, keyboard button, and templates are visible. |
| **Recording** | Actively listening. Pause and stop buttons are visible. |
| **Paused** | Recording is paused but your text is preserved. Resume or stop. |
| **Stopped** | Recording is finished. Review your text, resume, or move to Edit. |

## Using the Keyboard

Tap the **gray keyboard button** to switch to typing mode. A text editor appears where you can type or paste text directly.

From keyboard mode:
- Tap the **blue microphone button** to switch back to voice input
- Use the **orange templates button** to insert a template
- Tap **Use This Text** when you're done

## Privacy

Speech recognition is handled by Apple's built-in `SFSpeechRecognizer`. Depending on your device and iOS version, processing may happen on-device or via Apple's servers. No audio or text data is sent to third-party services.
