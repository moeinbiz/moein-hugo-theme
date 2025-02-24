---
title: "Beispielcode-Seite"
date: 2022-12-01T09:31:27+01:00

categories: ['Code', 'Tutorials']
tags: ['Hugo', 'Code']
# author: "Mostafa"
---
Alle Informationen zur Einrichtung dieses Themas mit Ihrer Hugo-Website finden Sie im offiziellen [Github Repository](https://github.com/mirmousaviii/mostafa-hugo-theme).

<!--more-->

__Wenn Sie dieses Thema installieren möchten, folgen Sie diesen Schritten:__

- Installieren Sie Hugo und erstellen Sie eine neue Website:

```bash
hugo new site my-new-blog
```

- Wechseln Sie in Ihren `theme`-Ordner und importieren Sie die neueste Version des Bilberry-Themas

```bash
cd my-new-blog/themes
git clone https://github.com/mirmousaviii/mostafa-hugo-theme.git
```

- Kopieren Sie den Beispielinhalt in Ihre neue Website

```bash
cp -r mostafa-hugo-theme/exampleSite/* ../
```

- Testen Sie die Installation

```bash
cd ../
hugo server -D
```

- Konfigurieren Sie die `config.toml`-Datei nach Ihren Bedürfnissen
- Beginnen Sie mit dem Bloggen
