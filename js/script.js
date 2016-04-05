/**
 * Created by Илья Яновой on 01.04.2016.
 */
$(function () {

    function showContent($el) {
        var index = $el.index();

        $('.text').eq(index).addClass('show').siblings().addClass('text').removeClass('show');
    }

    function showHelp($elem) {
        var index = $elem.index();

        $('.helped__box').eq(index).addClass('show').siblings().removeClass('show');
    }

    $('.menu__button').on('click', function () {
        showContent($(this));
    });


    $('.registered').on('click', function () {
        showHelp($(this));
    })
});