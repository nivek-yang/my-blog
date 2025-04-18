document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed'); // Log 1
  const menuItem = document.querySelector('.menu-item-tags');
  
  if (menuItem) {
    console.log('Found menu item:', menuItem); // Log 2
    
    // Add click event to the menu item itself
    menuItem.addEventListener('click', function(e) {
      console.log('Menu item clicked!'); // Log 4
      
      // 如果不是點擊子選單內的元素
      if (!e.target.closest('.submenu')) {
        e.preventDefault();
        this.classList.toggle('active');
        console.log('Toggled active class. Current classes:', this.classList); // Log 5
      }
    });
  } else {
    console.error('Could not find .menu-item-tags element'); // Error Log
  }
}); 