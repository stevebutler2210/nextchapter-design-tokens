# @stevebutler2210/nextchapter-design-tokens

Shared Tailwind CSS design tokens for NextChapter. Single source of truth for colours, typography, spacing, and radii — consumed by both the Rails web app and the React Native mobile app.

## Token coverage

- Colours (`--color-*`)
- Font families (`--font-*`)
- Border radii (`--radius-*`)
- Spacing scale (`--spacing-*`)

Full token definitions and design rationale are documented in `docs/DESIGN.md` in the [nextchapter](https://github.com/stevebutler2210/nextchapter) repository.

## Installation

This package is published to GitHub Packages. You will need a GitHub personal access token (PAT) scoped to `read:packages`.

Create or update `.npmrc` in the root of your consuming project:

```plaintext
@stevebutler2210:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Then install:

```bash
npm install @stevebutler2210/nextchapter-design-tokens
```

## Usage

### Rails (Tailwind CSS v4)

In your main CSS file, after `@import "tailwindcss"`:

```css
@import "tailwindcss";
@import "@stevebutler2210/nextchapter-design-tokens";
```

### React Native (NativeWind v5)

In `global.css`, after the standard NativeWind imports:

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";
@import "@stevebutler2210/nextchapter-design-tokens";
```

## Versioning

This package follows semantic versioning. Any change to a token value or name is a breaking change and warrants a major version bump.
