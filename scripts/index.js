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
    $('header').fadeIn('500');
    $('footer').fadeIn('700');
    $('main').fadeIn('1000');
}

regazziDesign.init = () => {
    regazziDesign.fadeInOnLoad();
    regazziDesign.buttonClick();
}

$(function () {
    regazziDesign.init();
});