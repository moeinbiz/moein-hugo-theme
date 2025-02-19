---
title: "صفحه نمونه کد"
date: 2022-12-01T09:31:27+01:00

categories: ['کد', 'آموزش‌ها']
tags: ['هوگو', 'کد']
# author: "مصطفی"
---
شما می‌توانید تمام اطلاعات لازم برای تنظیم این تم با سایت هیوگو خود را در
<br> [مخزن گیت‌هاب رسمی](https://github.com/mirmousaviii/mostafa-hugo-theme) پیدا کنید.

<!--more-->

__اگر می‌خواهید این تم را نصب کنید، مراحل زیر را دنبال کنید:__

- هیوگو را نصب کنید و یک سایت جدید ایجاد کنید:

```bash
hugo new site my-new-blog
```

- به پوشه `theme` خود بروید و آخرین نسخه تم بیلبری را وارد کنید

```bash
cd my-new-blog/themes
git clone https://github.com/mirmousaviii/mostafa-hugo-theme.git
```

- محتوای نمونه را به سایت جدید خود کپی کنید

```bash
cp -r mostafa-hugo-theme/exampleSite/* ../
```

- نصب را تست کنید

```bash
cd ../
hugo server -D
```

- فایل `config.toml` را بر اساس نیازهای خود پیکربندی کنید
- شروع به وبلاگ نویسی کنید
