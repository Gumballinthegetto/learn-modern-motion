# Learn Modern Motion v2

A comprehensive practice project for exploring modern web animations using **Motion (formerly Framer Motion) v12** and **Next.js 16**.

This project serves as a structured learning path for mastering complex animations, transitions, and interactive UI components.

## ✨ Features & Categories

The project is organized into several key animation categories, each containing multiple practical examples:

- **🖱️ Gestures**: Interactive animations triggered by hover, tap, pan, and drag.
- **🎞️ Keyframes**: Multi-stage animations with complex sequences.
- **🎭 Variants**: Organized animation states for cleaner, reusable code and staggered children.
- **🌊 Staggers**: Orchestrating animations for lists and groups of elements.
- **🔄 Transformations**: Position, scale, rotation, and skew animations.
- **⚡ Transitions**: Fine-tuning easing, duration, and spring physics.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [Motion v12](https://motion.dev/) (formerly Framer Motion)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [@hugeicons/react](https://hugeicons.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js installed
- `pnpm` (recommended)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## 📂 Project Structure

- `app/(routes)/` - Contains the categorized animation exercise pages.
- `components/` - Reusable UI components including the `Practice` wrapper and global `Navbar/Footer`.
- `utils/` - Utility functions like the Tailwind class merger (`cn`).
- `libs/` - External library configurations and wrappers.

## 📜 Credits

Exercises and concepts inspired by [@huxnwebdev](https://www.youtube.com/@huxnwebdev).

## ⚖️ License

MIT
