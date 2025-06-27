// themes/mosi/assets/js/tabs.js

document.addEventListener('DOMContentLoaded', () => {
    const tabsList = document.querySelector('.tabs-list ul');
    const tabPanes = document.querySelector('.tabs-content');

    if (tabsList && tabPanes) {
        tabsList.addEventListener('click', (e) => {
            e.preventDefault(); // جلوگیری از پرش صفحه به id

            const clickedTab = e.target.closest('li'); // پیدا کردن li ای که کلیک شده
            if (!clickedTab) return; // اگر روی li کلیک نشده بود، کاری نکن

            // حذف کلاس 'active' از تب فعال فعلی
            tabsList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
            // اضافه کردن کلاس 'active' به تب کلیک شده
            clickedTab.classList.add('active');

            // پیدا کردن ID پنل محتوایی مربوطه
            const targetId = clickedTab.querySelector('a').getAttribute('href').substring(1); // #tab-slug رو به tab-slug تبدیل می‌کنه
            
            // مخفی کردن همه پنل‌های محتوایی
            tabPanes.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
            // نمایش پنل محتوایی مربوطه
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    }
});