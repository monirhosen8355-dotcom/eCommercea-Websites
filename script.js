document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Read More Toggle in Hero Section
    const readMoreBtn = document.getElementById('read-more-btn');
    const heroFullText = document.getElementById('hero-text-full');
    const heroShortText = document.getElementById('hero-text-short');

    readMoreBtn.addEventListener('click', () => {
        const isHidden = heroFullText.classList.contains('hidden');
        
        if (isHidden) {
            heroFullText.classList.remove('hidden');
            readMoreBtn.textContent = 'Read less';
            heroShortText.style.display = 'none';
        } else {
            heroFullText.classList.add('hidden');
            readMoreBtn.textContent = 'Read more';
            heroShortText.style.display = 'block';
        }
    });

    // 2. Simple Hover Animation Logic for Cards
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#82b440';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#e1e1e1';
        });
    });

    // 3. Category Hover logic
    const categories = document.querySelectorAll('.cat-item');
    categories.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f9f9f9';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });

    // 4. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
function toggleMenu(){
let menu=document.getElementById("menu");
menu.classList.toggle("active");
}
function toggleMenu(){
    let menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// 🔥 বাইরে click করলে menu বন্ধ হবে
document.addEventListener("click", function(e){
    let menu = document.getElementById("menu");
    let icon = document.querySelector(".menu-icon");

    if(!menu.contains(e.target) && !icon.contains(e.target)){
        menu.classList.remove("active");
    }
});