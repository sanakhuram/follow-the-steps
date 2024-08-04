document.addEventListener('DOMContentLoaded', function() {
    const heroText = document.getElementById('heroText');
    const text = heroText.textContent;
    heroText.innerHTML = '';

    const colors = ['#97A15C', '#6A7239', '#F2993F', '#D3F210']; // Array of colors 

    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.setProperty('--hover-color', colors[index % colors.length]); // Assign a color based on index
        heroText.appendChild(span);
    });
});
//added dark /light mode toggle///

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleCheckbox = document.getElementById('theme-toggle');
    const body = document.body;

    
    const currentMode = localStorage.getItem('mode');
    if (currentMode) {
        body.classList.add(currentMode);
        toggleCheckbox.checked = currentMode === 'dark-mode';
    }

    toggleCheckbox.addEventListener('change', () => {
        body.classList.toggle('dark-mode');

        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark-mode');
        } else {
            localStorage.removeItem('mode');
        }
    });
});
