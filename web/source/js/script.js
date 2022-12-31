// JS code -----------------

const menuIcon = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body')
menuIcon.addEventListener('click', function(e) {
    menuIcon.classList.toggle('_active')
    menuBody.classList.toggle('_active')
    document.body.classList.toggle('_lock')

})

const tabLinks = document.querySelectorAll('.news-media__tab')
const tabsBody = document.querySelectorAll('.news-media__tab-body')
tabLinks.forEach(function (link) {
    link.addEventListener('click', function(e) {

        tabLinks.forEach(function(link) {
            link.classList.remove('_active')
        })
        tabsBody.forEach(function(tabBody) {
            tabBody.classList.remove('_active')
            setTimeout( () => {tabBody.classList.remove('_visible')}, 200)

        })

        if (link.classList.contains('news-media__tab_news')) {
            tabsBody.forEach( function(tabBody) {
                if (tabBody.classList.contains('tab-news')) {
                    tabBody.classList.add('_active')
                    setTimeout(() => {tabBody.classList.add('_visible')}, 300)
                }
            })
        }

        if (link.classList.contains('news-media__tab_press')) {
            tabsBody.forEach( function(tabBody) {
                if (tabBody.classList.contains('tab-press')) {
                    tabBody.classList.add('_active')
                    setTimeout(() => {tabBody.classList.add('_visible')}, 300)

                }
            })
        }

        if (link.classList.contains('news-media__tab_all')) {
            tabsBody.forEach( function(tabBody) {
                tabBody.classList.add('_active')
                setTimeout(() => {tabBody.classList.add('_visible')}, 500)

            })
        }
        link.classList.add('_active')

    })

});


const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })
}
function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight

        if (menuIcon.classList.contains('_active')) {
            menuIcon.classList.remove('_active')
            menuBody.classList.remove('_active')
            document.body.classList.remove('_lock')
        }

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        })
        e.preventDefault()
    }
}