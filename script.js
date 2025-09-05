// Interactive functionality for the Health & Wellness App

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initApp();
});

function initApp() {
    // Add smooth scrolling to all internal links
    addSmoothScrolling();
    
    // Add button interactions
    addButtonInteractions();
    
    // Add dock functionality
    initDock();
    
    // Add card interactions
    addCardInteractions();
    
    // Add loading states
    addLoadingStates();
}

function addSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function addButtonInteractions() {
    // Add ripple effect to buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Add click handlers for action buttons
    const createGoalBtn = document.querySelector('button:contains("Create a new goal")');
    if (createGoalBtn) {
        createGoalBtn.addEventListener('click', function() {
            showNotification('Creating new goal...', 'info');
        });
    }
    
    const viewArticlesBtn = document.querySelector('button:contains("View all articles")');
    if (viewArticlesBtn) {
        viewArticlesBtn.addEventListener('click', function() {
            showNotification('Loading articles...', 'info');
        });
    }
    
    const digitalTwinBtn = document.querySelector('button:contains("Get help from your digital twin")');
    if (digitalTwinBtn) {
        digitalTwinBtn.addEventListener('click', function() {
            showNotification('Connecting to digital twin...', 'info');
        });
    }
}

function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function initDock() {
    const dockButtons = document.querySelectorAll('.dock-button');
    
    dockButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            dockButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Handle different dock actions
            handleDockAction(index);
        });
    });
}

function handleDockAction(index) {
    const actions = [
        'home',
        'goals',
        'analytics',
        'favorites',
        'jump'
    ];
    
    const action = actions[index];
    showNotification(`Navigating to ${action}...`, 'info');
    
    // Add specific functionality for each action
    switch(action) {
        case 'home':
            scrollToTop();
            break;
        case 'goals':
            // Could open goals modal or navigate to goals page
            break;
        case 'analytics':
            // Could open analytics view
            break;
        case 'favorites':
            // Could show favorites
            break;
        case 'jump':
            // Could trigger quick action
            break;
    }
}

function addCardInteractions() {
    // Add click handlers to hero cards
    document.querySelectorAll('.hero-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3')?.textContent || 'Card';
            showNotification(`Opening ${title}...`, 'info');
        });
    });
    
    // Add click handlers to schedule cards
    document.querySelectorAll('.schedule-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4')?.textContent || 'Schedule';
            showNotification(`Viewing ${title} details...`, 'info');
        });
    });
    
    // Add click handlers to suggestion cards
    document.querySelectorAll('.suggestion-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3')?.textContent || 'Suggestion';
            showNotification(`Opening ${title}...`, 'info');
        });
    });
    
    // Add hover effects for rating stars
    document.querySelectorAll('.rating-star').forEach(star => {
        star.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
        });
        
        star.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

function addLoadingStates() {
    // Simulate loading states for better UX
    const loadingElements = document.querySelectorAll('.loading');
    
    loadingElements.forEach(element => {
        setTimeout(() => {
            element.classList.remove('loading');
        }, 2000);
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} fade-in`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'info' ? '#69f0f0' : '#27cccc'};
        color: #1f5661;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-size: 14px;
        font-weight: 500;
        max-width: 90%;
        text-align: center;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .notification {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.hero-card, .schedule-card, .suggestion-card').forEach(card => {
    observer.observe(card);
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger refresh or load more content
            console.log('Swipe up detected');
        } else {
            // Swipe down - could trigger pull to refresh
            console.log('Swipe down detected');
        }
    }
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowUp':
            e.preventDefault();
            window.scrollBy(0, -100);
            break;
        case 'ArrowDown':
            e.preventDefault();
            window.scrollBy(0, 100);
            break;
        case 'Home':
            e.preventDefault();
            scrollToTop();
            break;
        case 'End':
            e.preventDefault();
            window.scrollTo(0, document.body.scrollHeight);
            break;
    }
});

// Performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Handle scroll-based animations or lazy loading here
        console.log('Scroll position:', window.scrollY);
    }, 100);
});
