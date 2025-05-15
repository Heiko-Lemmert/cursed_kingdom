/**
 * Gets the current page path from the URL and extracts the page name
 * to set the appropriate CSS classes.
 */
function getPath() {
    let path = window.location.pathname;
    let page = path.split("/").pop();

    setClass(page);
}

/**
 * Sets CSS classes based on the current page to control layout and styling.
 * 
 * @param {string} page - The name of the current HTML page (e.g., 'index.html')
 */
function setClass(page) {
    if (page === 'index.html') {
        document.body.classList.add('overflow-hidden');
    } else if (page === 'imprint.html') {
        document.body.classList.add('overflow-initial');
        document.getElementById('parchment').classList.add('ph-imprint');
    } else if (page === 'terms.html') {
        document.body.classList.add('overflow-initial');
        document.getElementById('parchment').classList.add('ph-terms');
    }
}

window.addEventListener('DOMContentLoaded', getPath)