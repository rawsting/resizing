(function() {

    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
    var isFirefox = typeof InstallTrigger !== 'undefined';


    // menu open/close for mobile
    var menuElement = document.getElementById('menu');
    var menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            toggleClassFor(menuElement, 'menu--opened');
        });
    }

    // chrome-banner open/close
    var chromeBanner = document.getElementById('chrome-banner');
    var chromeBannerCloseButton = document.getElementById('chrome-banner-close');
    var chromeBannerOpenTimeout = 1500;
    var chromeBannerDisplayed = window.localStorage.getItem('chrome-banner-displayed');
    if (chromeBanner && !chromeBannerDisplayed && isChrome) {
        // add on load (1 sec timeout)
        setTimeout(function() {
            chromeBanner.classList.add('chrome-banner--opened');
        }, chromeBannerOpenTimeout);
        // remove on close click
        chromeBannerCloseButton.addEventListener('click', function() {
            chromeBanner.classList.remove('chrome-banner--opened');
            window.localStorage.setItem('chrome-banner-displayed', 'true');
        });
    }

    // video iframe load
    const videoContainer = document.getElementById('video-container');
    const videoLink = 'https://www.youtube.com/embed/l3uy7j6TCEo?autoplay=1&mute=1';
    function handleVideoClick() {
        videoContainer.innerHTML = `<iframe width="100%" height="100%" src="${videoLink}" frameborder="0" allowfullscreen>`;
        videoContainer.removeEventListener('click', handleVideoClick);
    }
    if (videoContainer) {
        videoContainer.addEventListener('click', handleVideoClick);
    }


    /* 
        FUNCTIONS
    */

    // toggle class for passed element
    function toggleClassFor(element, className) {
        element.classList.toggle(className);
    };


})();
