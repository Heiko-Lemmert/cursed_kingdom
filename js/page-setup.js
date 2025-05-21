let isMobile = false;
let page = null;

/**
 * Initializes the Screen by getting DOM elements
 */
function init() {
    setInterval(detectDeviceType, 250);
    setInterval(setClass, 250);
    page = getPath();
}

/**
 * Detects the type of device based on the user agent string and sets the global `isMobile` variable accordingly.
 * Determines if the device is an Android, iPad, iPhone, or Windows Phone.
 * Sets `isMobile` to `true` for mobile devices, otherwise sets it to `false`.
 */
function detectDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (/android/.test(userAgent)) {
        isMobile = true;
    } else if (/ipad/.test(userAgent)) {
        isMobile = true;
    } else if (/iphone/.test(userAgent)) {
        isMobile = true;
    } else if (/windows phone/.test(userAgent)) {
        isMobile = true;
    } else {
        isMobile = false;
    }
}

/**
 * Sets CSS classes based on the current page to control layout and styling.
 * 
 * @param {string} page - The name of the current HTML page (e.g., 'index.html')
 */
function setClass() {
    if (page === 'index.html' || isStringEmpty(page)) {
        setIndexClass();
    } else if (page === 'imprint.html') {
        setLegalClass();
    } else if (page === 'terms.html') {
        setLegalClass();
    } else if (page === 'mobile-controls.html') {
        setLegalClass();
    }
}

/**
 * Gets the current page path from the URL and extracts the page name
 * to set the appropriate CSS classes.
 */
function getPath() {
    let path = window.location.pathname;
    let page = path.split('/').pop();

    return page;
}

/**
 * Checks if a given string is empty or not.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} Returns true if the string is null, undefined, or has a length of 0; otherwise, false.
 */
function isStringEmpty(str) {
    return (!str || str.length === 0);
}

function setIndexClass() {
    document.body.classList.add('overflow-hidden');
    document.body.classList.add('body-height');
    document.getElementById('parchment').style.height = getContainHeight() + 'px';
    if (!isMobile) {
        document.getElementsByTagName('header')[0].classList.remove('d-none');
        document.getElementById('btn-imprint').classList.add('d-none');
        document.getElementById('btn-terms').classList.add('d-none');
        document.getElementById('btn-mobil-controls').classList.add('d-none');

    } else {
        document.getElementsByTagName('header')[0].classList.add('d-none');
        document.getElementById('btn-imprint').classList.remove('d-none');
        document.getElementById('btn-terms').classList.remove('d-none');
        document.getElementById('btn-mobil-controls').classList.remove('d-none');
    }
}

function setLegalClass() {
    if (isMobile && page === 'imprint.html') {
       document.body.classList.add('overflow-hidden');
    }
    document.body.classList.add('overflow-initial');
    document.getElementById('parchment').style.height = getContainHeight() + 'px';
}

function getContainHeight() {
    let contain = document.getElementById('contain');
    let height = contain.offsetHeight - 75;
    return height;
}

window.addEventListener('DOMContentLoaded', init)