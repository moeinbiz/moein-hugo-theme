// دریافت عنصر canvas و context رندر دو بعدی آن
const canvas = document.getElementById('concreteCanvas');
const ctx = canvas.getContext('2d');

// ایجاد یک canvas مجزا در حافظه برای پس‌زمینه (برای بهینه‌سازی)
const bgCanvas = document.createElement('canvas');
const bgCtx = bgCanvas.getContext('2d');

// آرایه‌ای برای نگهداری نقاط دنباله موس (با مهر زمانی)
let mouseTrail = [];
const trailDuration = 2000; // میلی‌ثانیه: دنباله طی ۲ ثانیه محو می‌شود

// آرایه‌ای برای نگهداری ذرات پراکنده شده
let particles = [];

/**
 * تابع ترسیم پس‌زمینه بتنی (بدون تغییر)
 */
function drawBackground() {
    const gradient = bgCtx.createLinearGradient(0, 0, bgCanvas.width, bgCanvas.height);
    gradient.addColorStop(0, '#d9d9d9');
    gradient.addColorStop(1, '#b3b3b3');
    bgCtx.fillStyle = gradient;
    bgCtx.fillRect(0, 0, bgCanvas.width, bgCanvas.height);

    const poreCount = (bgCanvas.width * bgCanvas.height) / 500;
    for (let i = 0; i < poreCount; i++) {
        const x = Math.random() * bgCanvas.width;
        const y = Math.random() * bgCanvas.height;
        const radius = Math.random() * 1.3 + 0.2;
        const alpha = Math.random() * 0.4 + 0.1;
        bgCtx.beginPath();
        bgCtx.arc(x, y, radius, 0, Math.PI * 2);
        bgCtx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
        bgCtx.fill();
    }
}

/**
 * تابع ایجاد ذرات بتن در محل موس
 * @param {number} x - موقعیت افقی موس
 * @param {number} y - موقعیت عمودی موس
 */
function createParticles(x, y) {
    const particleCount = 5; // تعداد ذرات در هر حرکت
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: x,
            y: y,
            // سرعت تصادفی در جهت‌های مختلف
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            // عمر تصادفی برای هر ذره
            lifespan: Math.random() * 50 + 20,
            // اندازه تصادفی
            size: Math.random() * 2 + 1,
            // رنگ خاکستری تصادفی
            color: `rgba(80, 80, 80, ${Math.random() * 0.5 + 0.3})`
        });
    }
}

/**
 * تابع بروزرسانی و ترسیم ذرات
 */
function updateAndDrawParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // بروزرسانی موقعیت بر اساس سرعت
        p.x += p.vx;
        p.y += p.vy;
        
        // اعمال اثر گرانش
        p.vy += 0.1;

        // کاهش عمر ذره
        p.lifespan--;

        // اگر عمر ذره تمام شد، آن را از آرایه حذف کن
        if (p.lifespan <= 0) {
            particles.splice(i, 1);
            continue; // برو به ذره بعدی
        }

        // ترسیم ذره
        ctx.beginPath();
        // شفافیت ذره با کاهش عمر آن کم می‌شود
        ctx.globalAlpha = p.lifespan / 50;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size); // ترسیم به شکل مربع کوچک
        }
        // بازگرداندن شفافیت به حالت عادی برای سایر ترسیم‌ها
        ctx.globalAlpha = 1.0;
}


/**
 * تابع تنظیم اولیه و بروزرسانی اندازه‌ها
 */
function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    drawBackground();
}

/**
 * حلقه انیمیشن اصلی
 */
function animate() {
    const now = Date.now();

    // حذف نقاط قدیمی از دنباله
    mouseTrail = mouseTrail.filter(p => (now - p.timestamp) < trailDuration);

    // پاک کردن canvas اصلی
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // کشیدن پس‌زمینه از پیش رندر شده
    ctx.drawImage(bgCanvas, 0, 0);

    // بروزرسانی و ترسیم ذرات
    updateAndDrawParticles();
    
    // ترسیم دنباله موس
    if (mouseTrail.length > 1) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < mouseTrail.length; i++) {
            ctx.beginPath();
            ctx.moveTo(mouseTrail[i - 1].x, mouseTrail[i - 1].y);
            
            // محاسبه سن نقطه
            const age = now - mouseTrail[i].timestamp;
            // محاسبه نسبت عمر باقی‌مانده
            const ratio = 1 - (age / trailDuration);

            const opacity = ratio;
            const lineWidth = 6 * ratio;

            if (opacity > 0 && lineWidth > 0) {
                ctx.strokeStyle = `rgba(30, 30, 30, ${opacity})`;
                ctx.lineWidth = lineWidth;
                ctx.lineTo(mouseTrail[i].x, mouseTrail[i].y);
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

// رویداد حرکت موس برای بروزرسانی موقعیت و ایجاد ذرات
window.addEventListener('mousemove', (e) => {
    // اضافه کردن موقعیت جدید با مهر زمانی
    mouseTrail.unshift({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
    // ایجاد ذرات در محل موس
    createParticles(e.clientX, e.clientY);
});

// رویداد تغییر اندازه پنجره
window.addEventListener('resize', setup);

// اجرای اولیه
setup();
animate();