regazziDesign = {}

regazziDesign.buttonClick = () => {
    $('button.toggle').click(function(){
        let toggleButton = $(this);
        let access = toggleButton[Object.keys(toggleButton)[0]];
        let parentElement = access.offsetParent;
        $(parentElement).toggleClass('expand');
        $('main ul li').not(parentElement).toggle();
        $(toggleButton).toggleClass('expanded');
        if ($(toggleButton).hasClass('expanded')) {
            toggleButton.html('Less')
        } else if (!$(toggleButton).hasClass('expanded')) {
            toggleButton.html('More')
        }
    })
}

regazziDesign.init = () => {
    regazziDesign.buttonClick();
}

$(function () {
    regazziDesign.init();
});