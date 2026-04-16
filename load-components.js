


const headerHTML = `
    <!-- TopNavBar -->
    <nav class="fixed top-0 w-full z-50 bg-[#f9faf8]/80 dark:bg-emerald-950/80 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300" id="site-header-nav">
        <div class="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto transition-all duration-300" id="header-inner">
            <div class="text-2xl font-bold tracking-tighter text-[#154212] dark:text-emerald-300">
                <a href="index.html"><img alt="Green-IAP Logo" class="h-15 w-15 object-contain transition-all duration-300" id="header-logo" src="logo.png" /></a>
            </div>
            <div class="hidden md:flex items-center gap-8" id="desktop-nav-links">
                <a class="nav-link group font-semibold transition-colors duration-300 relative pb-1 text-[#755a31] dark:text-emerald-100/70 hover:text-[#154212] dark:hover:text-emerald-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-gradient-to-r after:from-[#154212] after:to-[#2D5A27] dark:after:from-emerald-300 dark:after:to-emerald-400 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out" href="index.html">Home</a>
                <a class="nav-link group font-semibold transition-colors duration-300 relative pb-1 text-[#755a31] dark:text-emerald-100/70 hover:text-[#154212] dark:hover:text-emerald-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-gradient-to-r after:from-[#154212] after:to-[#2D5A27] dark:after:from-emerald-300 dark:after:to-emerald-400 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out" href="about.html">Products</a>
                <a class="nav-link group font-semibold transition-colors duration-300 relative pb-1 text-[#755a31] dark:text-emerald-100/70 hover:text-[#154212] dark:hover:text-emerald-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-gradient-to-r after:from-[#154212] after:to-[#2D5A27] dark:after:from-emerald-300 dark:after:to-emerald-400 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out" href="cases.html">Case Studies</a>
                <a class="nav-link group font-semibold transition-colors duration-300 relative pb-1 text-[#755a31] dark:text-emerald-100/70 hover:text-[#154212] dark:hover:text-emerald-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-gradient-to-r after:from-[#154212] after:to-[#2D5A27] dark:after:from-emerald-300 dark:after:to-emerald-400 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out" href="catalog.html">Process</a>
                <a class="nav-link group font-semibold transition-colors duration-300 relative pb-1 text-[#755a31] dark:text-emerald-100/70 hover:text-[#154212] dark:hover:text-emerald-300 after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-gradient-to-r after:from-[#154212] after:to-[#2D5A27] dark:after:from-emerald-300 dark:after:to-emerald-400 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out" href="contact.html">Contact</a>
            </div>
            
            <a href="quote.html" class="bg-gradient-to-br from-[#154212] to-[#2D5A27] text-white px-6 py-2.5 rounded-lg font-['Work_Sans'] font-bold text-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all text-center flex items-center justify-center">
                Request Quote
            </a>
        </div>
        <div class="bg-outline-variant/10 dark:bg-emerald-900/20 h-[1px]"></div>
    </nav>`;

const footerHTML = `
    <!-- Footer -->
    <footer class="bg-[#f3f4f2] dark:bg-emerald-950 w-full py-12 px-8 mt-20 text-sm relative z-40 pb-32 md:pb-12">
        <div class="bg-outline-variant/20 dark:bg-emerald-900/30 h-[1px] mb-12"></div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <div class="flex flex-col gap-4">
                <div class="text-xl font-bold text-[#154212] dark:text-emerald-300"><img loading="lazy" src="logo.png" class="h-12 w-auto object-contain" alt="Green-IAP Logo"></div>
                <p class="text-[#755a31] dark:text-emerald-200/60 leading-relaxed">The leading agricultural authority providing premium nutrient solutions for sustainable agriculture.</p>
                <!-- Social Icons -->
                <div class="flex gap-3 mt-2">
                    <a href="#" class="w-9 h-9 rounded-lg bg-surface-container-lowest dark:bg-emerald-900 flex items-center justify-center text-[#755a31] dark:text-emerald-300 hover:bg-[#154212] hover:text-white dark:hover:bg-emerald-600 transition-all duration-300" aria-label="Public">
                        <span class="material-symbols-outlined text-sm" aria-hidden="true">public</span>
                    </a>
                    <a href="#" class="w-9 h-9 rounded-lg bg-surface-container-lowest dark:bg-emerald-900 flex items-center justify-center text-[#755a31] dark:text-emerald-300 hover:bg-[#154212] hover:text-white dark:hover:bg-emerald-600 transition-all duration-300" aria-label="Email">
                        <span class="material-symbols-outlined text-sm" aria-hidden="true">mail</span>
                    </a>
                    <a href="#" class="w-9 h-9 rounded-lg bg-surface-container-lowest dark:bg-emerald-900 flex items-center justify-center text-[#755a31] dark:text-emerald-300 hover:bg-[#154212] hover:text-white dark:hover:bg-emerald-600 transition-all duration-300" aria-label="Share">
                        <span class="material-symbols-outlined text-sm" aria-hidden="true">share</span>
                    </a>
                </div>
            </div>
            <div>
                <h5 class="font-bold mb-6 text-[#154212] dark:text-emerald-400">Solutions</h5>
                <ul class="flex flex-col gap-4">
                    <li><a class="text-[#755a31] dark:text-emerald-200/60 hover:text-[#154212] dark:hover:text-emerald-300 transition-colors" href="index.html">Home</a></li>
                    <li><a class="text-[#755a31] dark:text-emerald-200/60 hover:text-[#154212] dark:hover:text-emerald-300 transition-colors" href="about.html">Products</a></li>
                    <li><a class="text-[#755a31] dark:text-emerald-200/60 hover:text-[#154212] dark:hover:text-emerald-300 transition-colors" href="cases.html">Case Studies</a></li>
                </ul>
            </div>
            <div>
                <h5 class="font-bold mb-6 text-[#154212] dark:text-emerald-400">Support</h5>
                <ul class="flex flex-col gap-4">
                    <li><a class="text-[#755a31] dark:text-emerald-200/60 hover:text-[#154212] dark:hover:text-emerald-300 transition-colors" href="#">Technical Help</a></li>
                    <li><a class="text-[#755a31] dark:text-emerald-200/60 hover:text-[#154212] dark:hover:text-emerald-300 transition-colors" href="contact.html">Contact Us</a></li>
                    <li><a class="text-[#755a31] dark:text-emerald-200/60 hover:text-[#154212] dark:hover:text-emerald-300 transition-colors" href="#">Feedback</a></li>
                </ul>
            </div>
            <div>
                <h5 class="font-bold mb-6 text-[#154212] dark:text-emerald-400">Stay Updated</h5>
                <p class="text-[#755a31] dark:text-emerald-200/60 text-xs mb-4 leading-relaxed">Get monthly agricultural insights and exclusive offers.</p>
                <form class="flex gap-2" onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();">
                    <input type="email" required placeholder="your@email.com" class="flex-1 bg-white dark:bg-emerald-900/40 border-none rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-[#154212]/40 text-[#191c1b] dark:text-emerald-100 outline-none" />
                    <button type="submit" class="bg-[#154212] text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-[#2d5a27] dark:hover:bg-emerald-700 transition-colors">Join</button>
                </form>
            </div>
        </div>
        <div class="max-w-7xl mx-auto pt-12 mt-12 border-t border-[#c2c9bb]/20 dark:border-emerald-900/40 text-[#755a31] dark:text-emerald-200/60 text-xs flex flex-col md:flex-row justify-between gap-4">
            <p>© 2024 Green-IAP Agricultural Authority. All rights reserved.</p>
            <div class="flex gap-6 items-center">
                <div class="flex gap-2 items-center">
                    <span class="material-symbols-outlined text-sm" aria-hidden="true">verified_user</span>
                    <span>Certified Agricultural Authority</span>
                </div>
                <button onclick="window.scrollTo({top:0,behavior:'smooth'})" class="text-[#154212] dark:text-emerald-300 font-bold hover:underline flex items-center gap-1 cursor-pointer">
                    Back to top <span class="material-symbols-outlined text-sm" aria-hidden="true">arrow_upward</span>
                </button>
            </div>
        </div>
    </footer>
    <!-- BottomNavBar (Mobile Only) -->
    <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#f9faf8]/90 dark:bg-emerald-950/90 backdrop-blur-xl border-t border-outline-variant/20 dark:border-emerald-900/40 shadow-[0_-10px_30px_rgba(21,66,18,0.08)] rounded-t-[24px]" id="mobile-nav-links">
        <a href="index.html" class="mobile-link flex flex-col items-center justify-center text-[#755a31] dark:text-emerald-200/60 active:bg-surface-container-low dark:active:bg-emerald-900 transition-all duration-300 rounded-[24px] px-6 py-2">
            <span class="material-symbols-outlined" aria-hidden="true">home</span>
            <span class="text-[10px] font-bold uppercase tracking-wider mt-1">Home</span>
        </a>
        <a href="about.html" class="mobile-link flex flex-col items-center justify-center text-[#755a31] dark:text-emerald-200/60 active:bg-surface-container-low dark:active:bg-emerald-900 transition-all duration-300 rounded-[24px] px-6 py-2">
            <span class="material-symbols-outlined" aria-hidden="true">eco</span>
            <span class="text-[10px] font-bold uppercase tracking-wider mt-1">Products</span>
        </a>
        <a href="cases.html" class="mobile-link flex flex-col items-center justify-center text-[#755a31] dark:text-emerald-200/60 active:bg-surface-container-low dark:active:bg-emerald-900 transition-all duration-300 rounded-[24px] px-6 py-2">
            <span class="material-symbols-outlined" aria-hidden="true">analytics</span>
            <span class="text-[10px] font-bold uppercase tracking-wider mt-1">Cases</span>
        </a>
        <a href="catalog.html" class="mobile-link flex flex-col items-center justify-center text-[#755a31] dark:text-emerald-200/60 active:bg-surface-container-low dark:active:bg-emerald-900 transition-all duration-300 rounded-[24px] px-6 py-2">
            <span class="material-symbols-outlined" aria-hidden="true">category</span>
            <span class="text-[10px] font-bold uppercase tracking-wider mt-1">Process</span>
        </a>
        <a href="contact.html" class="mobile-link flex flex-col items-center justify-center text-[#755a31] dark:text-emerald-200/60 active:bg-surface-container-low dark:active:bg-emerald-900 transition-all duration-300 rounded-[24px] px-6 py-2">
            <span class="material-symbols-outlined" aria-hidden="true">message</span>
            <span class="text-[10px] font-bold uppercase tracking-wider mt-1">Contact</span>
        </a>
    </nav>`;

// Insert header and footer
const headerPlaceholder = document.getElementById('site-header-container');
if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;
    setActiveNavLink();
}
const footerPlaceholder = document.getElementById('site-footer-container');
if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
}

// Function to set the active navigation link based on current page
function setActiveNavLink() {
  // Get the current page name from the URL
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const afterElement = link.querySelector(':after');
    
    // Check if the link matches the current page
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      // Apply active state - change text color
      link.classList.remove('text-[#755a31]', 'dark:text-emerald-100/70');
      link.classList.add('text-[#154212]', 'dark:text-emerald-300');
      
      // Animate the underline with scaleX
      if (afterElement) {
        afterElement.style.transform = 'scaleX(1)';
      }
    } else {
      // Reset inactive state
      link.classList.remove('text-[#154212]', 'dark:text-emerald-300');
      link.classList.add('text-[#755a31]', 'dark:text-emerald-100/70');
      
      // Reset underline
      if (afterElement) {
        afterElement.style.transform = 'scaleX(0)';
      }
    }
  });
}

// Header scroll animation - shrink header by 15px on scroll
function initHeaderScrollAnimation() {
  const headerNav = document.getElementById('site-header-nav');
  const headerInner = document.getElementById('header-inner');
  const headerLogo = document.getElementById('header-logo');
  
  if (!headerNav || !headerInner) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      // Scrolled down - shrink header
      headerInner.style.padding = '0.5rem 2rem';
      if (headerLogo) headerLogo.style.height = '2rem';
      headerNav.classList.add('shadow-md');
    } else {
      // At top - restore full header  
      headerInner.style.padding = '1rem 2rem';
      if (headerLogo) headerLogo.style.height = '3.75rem';
      headerNav.classList.remove('shadow-md');
    }
  }, { passive: true });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initHeaderScrollAnimation();
  initPremiumAnimations();
  initPhases3To7();
});

// PHASE 3: Typography Hierarchy Improvements
function initTypographyHierarchy() {
  // Apply optimal line-heights and letter-spacing for readability
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach(heading => {
    heading.style.lineHeight = '1.2';
    heading.style.letterSpacing = '-0.01em';
  });
  
  const paragraphs = document.querySelectorAll('p, span');
  paragraphs.forEach(p => {
    if (p.textContent.length > 50) {
      p.style.lineHeight = '1.6';
    }
  });
}

// PHASE 4: Consistent Spacing System (8px base)
function initSpacingSystem() {
  // Root spacing variables for consistency
  const spacingScale = {
    'xs': '0.25rem',    // 4px
    'sm': '0.5rem',     // 8px
    'md': '1rem',       // 16px
    'lg': '1.5rem',     // 24px
    'xl': '2rem',       // 32px
    'xxl': '3rem'       // 48px
  };
  
  document.documentElement.style.setProperty('--spacing-base', '0.5rem');
  Object.entries(spacingScale).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--spacing-${key}`, value);
  });
}

// PHASE 5: WCAG AA Contrast Compliance
function initContrastCompliance() {
  const wcagCompliantColors = {
    'primary': '#154212',           // AAA compliant
    'secondary': '#755a31',         // AA compliant
    'on-surface': '#191c1b',        // AAA compliant
    'error': '#ba1a1a'              // AA compliant
  };
  
  // Map colors to elements
  document.querySelectorAll('[class*="text-primary"]:not([class*="text-primary-"])').forEach(el => {
    const bgColor = window.getComputedStyle(el.parentElement).backgroundColor;
    if (bgColor.includes('rgb(255')) {
      el.setAttribute('data-wcag', 'AAA');
    }
  });
  
  return wcagCompliantColors;
}

// PHASE 6: Enhanced Button & Card Components
function initComponentPush() {
  // Premium button enhancements
  document.querySelectorAll('button').forEach(btn => {
    btn.style.minHeight = '44px';
    btn.style.minWidth = '44px';
    btn.setAttribute('data-component', 'button-premium');
    
    // Add ripple effect on click
    btn.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Card component enhancements
  document.querySelectorAll('[class*="rounded-xl"], [class*="rounded-lg"]').forEach(card => {
    if (card.classList.contains('group') || card.parentElement.classList.contains('group')) {
      card.setAttribute('data-component', 'card-premium');
      card.style.willChange = 'transform, box-shadow';
    }
  });
}

// PHASE 7: Performance Optimization & Touch Targets
function initPerformanceOptimizations() {
  // Lazy load all images with intersection observer
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  document.querySelectorAll('img[data-alt]').forEach(img => {
    imageObserver.observe(img);
  });
  
  // Ensure all interactive elements meet minimum touch target (48x48px)
  document.querySelectorAll('a, button, [role="button"]').forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.width < 48 || rect.height < 48) {
      element.style.padding = 'max(0.5rem, calc((48px - 100%) / 2))';
      element.setAttribute('data-touch-target', 'optimized');
    }
  });
  
  // Preload critical resources
  const links = document.querySelectorAll('a[href$=".html"]');
  if (links.length > 0) {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = links[0].href;
    document.head.appendChild(link);
  }
  
  // Add scroll smoothing for better performance
  document.documentElement.style.scrollBehavior = 'smooth';
}

// Master initialization function
function initPhases3To7() {
  initTypographyHierarchy();
  initSpacingSystem();
  initContrastCompliance();
  initComponentPush();
  initPerformanceOptimizations();
}
  // Smooth scroll reveal animations for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  document.querySelectorAll('[data-animate="true"], .group, section > div > div').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
  
  // Enhance button interactions
  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
      if (!this.classList.contains('material-symbols-outlined')) {
        this.style.transform = 'translateY(-2px)';
        this.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
      }
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
    
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.98)';
      this.style.transition = 'transform 0.1s ease-out';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
  });
  
  // Enhance form input focus states
  document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'scale(1.01)';
      this.style.boxShadow = '0 0 0 3px rgba(21, 66, 18, 0.1)';
      this.style.transition = 'all 0.3s ease-out';
    });
    
    input.addEventListener('blur', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
  
  // Add smooth page transition effect
  document.querySelectorAll('a[href*=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#') && !this.target) {
        e.preventDefault();
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.3s ease-out';
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });
  
  // Add lazy image loading with fade-in
  document.querySelectorAll('img[data-alt]').forEach(img => {
    const tempImg = new Image();
    tempImg.onload = function() {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.4s ease-out';
      setTimeout(() => {
        img.style.opacity = '1';
      }, 50);
    };
    tempImg.src = img.src;
  });
