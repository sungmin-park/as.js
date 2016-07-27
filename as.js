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

    $.fn.asForm = function () {
        return this.click(function (e) {
            e.preventDefault();
            var $this = $(this);
            var action = this.href;
            var data = $.extend({}, $this.data());
            var method = 'GET';
            if (data.method) {
                method = data.method;
                delete data.method;
            }
            $('<form>')
                .appendTo($('body'))
                .css({opacity: 0, width: 1, height: 1})
                .attr({action: action, method: method})
                .append(_.map(data, function (value, name) {
                    return $('<input>').attr('name', name).val(value);
                }))
                .submit();
        });
    };

    $(function () {
        $('.-as-back').asBack();
        $('.-as-form').asForm();
    });
})(jQuery);