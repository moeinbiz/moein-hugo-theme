---
title: "Voorbeeld code pagina"
date: 2022-12-01T09:31:27+01:00

categories: ['Code', 'Tutorials']
tags: ['Hugo', 'Code']
# author: "Mostafa"
---
Je vindt alle informatie om dit thema in te stellen met je Hugo-site
op de officiële [Github Repository](https://github.com/mirmousaviii/mostafa-hugo-theme).

<!--more-->

__Als je dit thema wilt installeren, volg dan deze stappen:__

- Installeer Hugo en maak een nieuwe site aan:

```bash
hugo new site mijn-nieuwe-blog
```

- Ga naar je `theme` map en importeer de nieuwste versie van het Bilberry Thema

```bash
cd mijn-nieuwe-blog/themes
git clone https://github.com/mirmousaviii/mostafa-hugo-theme.git
```

- Kopieer de voorbeeldinhoud naar je nieuwe site

```bash
cp -r mostafa-hugo-theme/exampleSite/* ../
```

- Test de installatie

```bash
cd ../
hugo server -D
```

- Configureer het `config.toml` bestand naar jouw wensen
- Begin met bloggen

