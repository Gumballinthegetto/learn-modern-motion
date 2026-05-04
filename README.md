# 🍌 The Nanas Lab

An experimental animation playground by **Nanas Corp**. This project is a curated collection of motion patterns and implementation showcases built with **Motion v12** and **Next.js 16**.

Instead of just theory, **The Nanas Lab** focuses on the *how*. Each experiment is a journey from a set of instructions to a living, breathing animation pattern, serving as a reference library for modern web motion.

## ✨ Research Areas

The lab is organized into several key animation categories, each containing multiple practical implementations:

- **🖱️ Gestures**: Interactive animations triggered by hover, tap, pan, and drag.
- **🎞️ Keyframes**: Multi-stage animations with complex sequences.
- **🎭 Variants**: Organized animation states for cleaner, reusable code and staggered children.
- **🌊 Staggers**: Orchestrating animations for lists and groups of elements.
- **🔄 Transformations**: Position, scale, rotation, and skew animations.
- **⚡ Transitions**: Fine-tuning easing, duration, and spring physics.
- **👁️ While In View**: Animations triggered by scroll and viewport entry.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [Motion v12](https://motion.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [@hugeicons/react](https://hugeicons.com/)

## 🚀 Lab Setup

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

The lab will be available at `http://localhost:3000`.

## 📂 Project Structure

- `app/(routes)/` - The core laboratory containing categorized animation experiments.
- `components/` - Reusable UI components including the `Practice` wrapper and global `Navbar/Footer`.
- `utils/` - Utility functions like the Tailwind class merger (`cn`).
- `libs/` - External library configurations and wrappers.

## 📜 Credits

Implementations inspired by the work of [@huxnwebdev](https://www.youtube.com/@huxnwebdev) and the broader motion design community.

## ⚖️ License

MIT — Created by **Nanas Corp**.
