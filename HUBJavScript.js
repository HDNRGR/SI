// Adjust body height dynamically to handle mobile viewport quirks
function adjustHeight() {
    // Calculate the viewport height and apply it to the body
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Now set the body to use 100vh minus any potential space needed (such as address bars)
    document.body.style.height = `calc(var(--vh, 1vh) * 100)`;
}

// Call adjustHeight on load and resize
window.addEventListener('load', adjustHeight);
window.addEventListener('resize', adjustHeight);
