# SigVerify

SigVerify is a secure document workflow solution that integrates on-chain signatures for immutable verification. Built during the XRPL Commons Residency and HACKS Hackathon, it leverages the XRPL blockchain to provide a trustless environment for document management and signing.

## 🚀 Features

- **Document Workflow**: Create, manage, and track document statuses seamlessly.
- **On-Chain Signatures**: Signatures are recorded on the XRPL ledger, ensuring immutability and proof of existence.
- **User Dashboard**: A comprehensive dashboard to view pending requests, completed documents, and analytics.
- **Secure Authentication**: Integrated with Clerk for robust user management and security.
- **Profile Management**: customizable user profiles with KYC integration options.

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Radix UI](https://www.radix-ui.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Blockchain**: XRPL (XRP Ledger) Integration
- **Signatures**: React Signature Canvas

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd SigVerify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📸 Screenshots

*(Add screenshots of your dashboard and signing process here)*

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
