/**
 * Created by Илья Яновой on 01.04.2016.
 */
$(function () {

    function showContent($el) {
        var index = $el.index();

        $('.text').eq(index).addClass('show').siblings().addClass('text').removeClass('show');
    }

    function showHelp($elem) {
        var tooltipText = $elem.attr('data-title');

        $elem.after('<div class="tooltip">' + tooltipText + '</div>').next('.tooltip').fadeIn(300);
    }

    function hideHelp($elem) {
        var $tooltip = $elem.siblings('.tooltip');
        $tooltip.fadeOut(300, removeTooltip());
        removeTooltip();

        function removeTooltip() {
            $tooltip.siblings('.tooltip').remove();
        }
    }

    var $inputField = $('input');

    $('.menu__button').on('click', function () {
        showContent($(this));
    });


    $inputField.on('mouseenter', function () {
        showHelp($(this));
    });

    $inputField.on('mouseleave', function () {
        hideHelp($(this));
    })
});