(function ($) {
    $.fn.asBack = function () {
        return this.click(function (e) {
            e.preventDefault();
            history.back();
            $.blockUI({
                css: {
                    border: 'none',
                    padding: '15px',
                    backgroundColor: '#000',
                    '-webkit-border-radius': '10px',
                    '-moz-border-radius': '10px',
                    opacity: .5,
                    color: '#fff'
                }
            });
        });
    };

    $(function () {
        $('.-as-back').asBack();
    });
})(jQuery);