---
title: "Sample code page"
date: 2022-12-01T09:31:27+01:00

categories: ['Code', 'Tutorials']
tags: ['Hugo', 'Code']
# author: "Mostafa"
---
You will find all information to setup this theme with your Hugo site
on the official [Github Repository](https://github.com/mirmousaviii/mostafa-hugo-theme).

<!--more-->

__If you want to install this theme, follow these steps:__

- Install Hugo and create a new site:

```bash
hugo new site my-new-blog
```

- Switch to your `theme` folder and import the latest version of the Bilberry Theme

```bash
cd my-new-blog/themes
git clone https://github.com/mirmousaviii/mostafa-hugo-theme.git
```

- Copy the example content to your new site

```bash
cp -r mostafa-hugo-theme/exampleSite/* ../
```

- Test the installation

```bash
cd ../
hugo server -D
```

- Configure the `config.toml` file according to your needs
- Start blogging
