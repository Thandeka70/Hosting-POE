// Accordion functionality with smooth animations
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Optional: Close all other accordion items (uncomment for single-open behavior)
            // closeAllAccordions();
            
            // Toggle current accordion item
            if (isActive) {
                accordionItem.classList.remove('active');
            } else {
                accordionItem.classList.add('active');
            }
        });
    });
    
    // Function to close all accordion items
    function closeAllAccordions() {
        const allItems = document.querySelectorAll('.accordion-item');
        allItems.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Add keyboard accessibility
    accordionHeaders.forEach(header => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
        
        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
                
                // Update aria-expanded
                const isExpanded = this.parentElement.classList.contains('active');
                this.setAttribute('aria-expanded', isExpanded);
            }
        });
    });
});

