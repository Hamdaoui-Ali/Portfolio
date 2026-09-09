---
title: "RiffLock"
summary: "Local-first Windows security application that protects files and folders with password-based encryption and an experimental guitar-riff second factor."
status: completed
role: "Python Desktop Security Engineer"
category: "Cybersecurity · Desktop · Python"
github: "https://github.com/Hamdaoui-Ali/RiffLock"
visibility: public
evidence:
  - "Wrapped data-encryption key with password-based authentication"
  - "Single-file and recursive folder protection using .rifflock containers"
  - "Optional guitar-riff 2FA kept separate from encryption material"
featured: false
sortOrder: 7
stack:
  [
    "PYTHON",
    "CUSTOMTKINTER",
    "CRYPTOGRAPHY",
    "ARGON2",
    "SQLITE",
    "SOUNDDEVICE",
    "LIBROSA",
    "PYTEST",
    "PYINSTALLER",
  ]
---

## Overview

RiffLock is a Windows desktop security application for protecting sensitive local files without requiring a cloud service. The current MVP covers first-run owner setup, password login, file and folder protection, restore workflows, optional riff-based two-factor authentication, settings, and Windows packaging.

## Key-management model

During first-run setup, RiffLock creates a local owner account and an encrypted key vault. Passwords are processed with Argon2 to unlock a wrapped data-encryption key; the password itself is never used directly as the file-encryption key. After authentication, the unwrapped key is held only for the active session.

Users can protect individual files or recursively protect folders into `.rifflock` containers. Restore operations validate the container format, decrypt the payload, and refuse to silently overwrite an existing user file. Application state, encrypted metadata, vault data, and logs remain in the Windows user profile.

## Experimental riff factor

The optional second factor records guitar-riff samples and extracts comparable audio features for login verification. The riff is an authentication factor only: it does not become an encryption key and is not presented as a biometric guarantee.

## Security boundaries and limitations

- Local-first, single-owner Windows application
- No cloud sync, remote backup, enterprise identity, or forgotten-password recovery
- Explicit recovery warning because losing the password may make protected files unrecoverable
- Custom encrypted container format with documented file-format and restore rules
- PyInstaller packaging with manual clean-profile validation still called out as a release limitation

## Technology stack

Python 3.14, CustomTkinter, `cryptography`, Argon2, SQLite, `sounddevice`, librosa, Pytest, and PyInstaller.
