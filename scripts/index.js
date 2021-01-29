regazziDesign = {}

regazziDesign.buttonClick = () => {
    $('button.toggle').click(function(){
        let toggleButton = $(this);
        let access = $(toggleButton[Object.keys(toggleButton)[0]]);
        let parentElement = $($(access).parent()).parent();
        $(parentElement).toggleClass('expand');
        $('main ul li').not(parentElement).toggle();
        $(toggleButton).toggleClass('expanded');
        if ($(toggleButton).hasClass('expanded')) {
            toggleButton.html('Less')
        } else if (!$(toggleButton).hasClass('expanded')) {
            toggleButton.html('More')
        }
    })
    $('button.about').click(function () {
        $('aside').toggleClass('show')
        if ($('aside').hasClass('show')) {
            $(this).html('Close');
        } else if (!$('aside').hasClass('show')) {
            $(this).html('About me')
        }
    })
}

regazziDesign.fadeInOnLoad = () => {
    $('main').imagesLoaded()
        .done(function (instance) {
            $('body').addClass('appear');
        })
}

regazziDesign.linkInNewTabAccessibility = () => {
    function addNoOpener(link) {
        let linkTypes = (link.getAttribute('rel') || '').split(' ');
        if (!linkTypes.includes('noopener')) {
            linkTypes.push('noopener');
        }
        link.setAttribute('rel', linkTypes.join(' ').trim());
    }

    function addNewTabMessage(link) {
        if (!link.querySelector('.screen-reader-only')) {
            link.insertAdjacentHTML('beforeend', '<span class="srOnly">(opens in a new tab)</span>');
        }
    }

    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        addNoOpener(link);
        addNewTabMessage(link);
    });
}

regazziDesign.init = () => {
    regazziDesign.fadeInOnLoad();
    regazziDesign.buttonClick();
    regazziDesign.linkInNewTabAccessibility();
}

$(function () {
    regazziDesign.init();
});