document.getElementById('toggleBtn').addEventListener('click', function() {
    const block = document.getElementById('hiddenBlock');
    const currentDisplay = window.getComputedStyle(block).display;
    block.style.display = currentDisplay === 'none' ? 'block' : 'none';
});