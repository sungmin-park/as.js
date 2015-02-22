$(function () {
    $('.as-form').click(function (e) {
        e.preventDefault();
        $('<form>')
            .appendTo('body')
            .attr({method: 'POST', 'action': this.href})
            .append($.map($(this).data(), function (value, name) {
                return $('<input type="hidden">').attr('name', name).val(value)[0];
            }))
            .submit();
    });

    $('.as-button').change(function () {
        $(this).closest('form').submit();
    });
});