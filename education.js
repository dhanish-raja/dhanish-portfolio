document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
  
    toggleButtons.forEach(button => {
      button.addEventListener('click', function () {
        const contentBox = this.closest('.content-box');
        contentBox.classList.toggle('expanded');
  
        if (contentBox.classList.contains('expanded')) {
          this.textContent = 'Show Less';
        } else {
          this.textContent = 'Click to see more';
        }
      });
    });
  });
  