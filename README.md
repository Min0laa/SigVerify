# ✍️ SigVerify — XRPL Commons / HACKS Hackathon

> Secure document signing platform with blockchain-backed signatures on the XRP Ledger.

Built at **XRPL Commons Residency × HACKS Hackathon** (2024).

## 💡 The Problem

Digital signatures today are centralized — you trust DocuSign or Adobe to keep the record. SigVerify puts signatures **on the XRP Ledger**, making them immutable and verifiable by anyone, forever.

## ✨ Features

- **Blockchain signatures** — every signature is recorded on XRPL, tamper-proof
- **Document management** — create, send, and track documents through their lifecycle
- **Pre-built templates** — NDA, contracts, offers ready to use
- **Dashboard** — real-time view of pending, signed, and completed documents
- **Secure auth** — Clerk authentication with user profiles
- **KYC-ready** — profile system designed for identity verification integration

## 🛠 Tech Stack

| | |
|--|--|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Radix UI |
| Database | MongoDB |
| Auth | Clerk |
| Blockchain | XRPL (XRP Ledger) |
| Signatures | React Signature Canvas |

## 🚀 Setup

```bash
git clone https://github.com/Min0laa/SigVerify
cd SigVerify
npm install

# Copy environment variables
cp .env.example .env.local
# Fill in: MONGODB_URI, CLERK_SECRET_KEY, NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

npm run dev
```

## 🧠 What I learned

- How to write and read data on the XRP Ledger
- Building a full document workflow state machine (draft → sent → signed → completed)
- Integrating Clerk for auth with MongoDB for custom data
- Designing a clean dashboard UI with Radix UI components

## 👤 Author

**Sacha Morin** — [LinkedIn](https://linkedin.com/in/sacha-morin60) · [GitHub](https://github.com/Min0laa)

*Built at XRPL Commons Residency × HACKS Hackathon 2024 🔐*
