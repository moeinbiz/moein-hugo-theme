# Mostafa Hugo Theme

Welcome to `mostafa-hugo-theme`! This is a flexible theme for Hugo.

The theme supports multiple languages, various content types, and integrates seamlessly with social media platforms.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Install via Hugo Modules (Recommended)](#install-via-hugo-modules-recommended)
    - [1.1 Initialize Hugo Modules](#11-initialize-hugo-modules-if-not-already-initialized)
    - [1.2 Add the theme as a module](#12-add-the-theme-as-a-module)
    - [1.3 Fetch the theme](#13-fetch-the-theme)
  - [Install via Git Submodule (Advanced Users)](#install-via-git-submodule-advanced-users)
    - [2.1 Add the theme as a submodule](#21-add-the-theme-as-a-submodule)
    - [2.2 Initialize and update the submodule](#22-initialize-and-update-the-submodule)
    - [2.3 Set the theme in `config.toml`](#23-set-the-theme-in-configtoml)
  - [Install via Manual Download (For Non-Git Users)](#install-via-manual-download-for-non-git-users)
    - [3.1 Download the theme](#31-download-the-theme)
    - [3.2 Set the theme in `config.toml`](#32-set-the-theme-in-configtoml)
- [Running Your Hugo Site](#running-your-hugo-site)
- [Contributing](#contributing)
- [License](#license)

## Features

- Lightweight and fast
- Responsive design
- Multilingual support
- Dark and modern theme
- Supports various content types (posts, pages, galleries, videos, etc.)
- Integrated with social media

## Installation

You can install `mostafa-hugo-theme` using different methods depending on your preference.

### Install via Hugo Modules (Recommended)

#### 1.1 Initialize Hugo Modules (if not already initialized)

Run this command inside your Hugo project:

```bash
hugo mod init github.com/yourusername/your-hugo-site
```

#### 1.2 Add the theme as a module

Edit your `config.toml` file and add:

```toml
[module]
    [[module.imports]]
        path = "github.com/mirmousaviii/mostafa-hugo-theme"
```

#### 1.3 Fetch the theme

Run:

```bash
hugo mod tidy
```

✅ Done! The theme is now installed, and Hugo will automatically pull updates when you run `hugo mod tidy`.

### Install via Git Submodule (Advanced Users)

#### 2.1 Add the theme as a submodule

Run:

```bash
git submodule add https://github.com/mirmousaviii/mostafa-hugo-theme.git themes/mostafa-hugo-theme
```

#### 2.2 Initialize and update the submodule

Run:

```bash
git submodule update --init --recursive
```

#### 2.3 Set the theme in `config.toml`

```toml
theme = "mostafa-hugo-theme"
```

✅ Now the theme is linked to your project as a submodule! To update it, use:

```bash
git submodule update --remote --merge
```

### Install via Manual Download (For Non-Git Users)

If you don’t use Git, you can download the theme manually.

#### 3.1 Download the theme

1. Go to [GitHub Repository](https://github.com/mirmousaviii/mostafa-hugo-theme).
2. Click on **"Code" → "Download ZIP"**.
3. Extract the ZIP file and place it inside your Hugo project under `themes/mostafa-hugo-theme/`.

#### 3.2 Set the theme in `config.toml`

```toml
theme = "mostafa-hugo-theme"
```

## Running Your Hugo Site

After installing the theme, run:

```bash
hugo server
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/mirmousaviii/mostafa-hugo-theme).

## License

This theme is licensed under the MIT License. See the [LICENSE](https://github.com/mirmousaviii/mostafa-hugo-theme/blob/main/LICENSE) file for more information.
