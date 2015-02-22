$(function () {
    $('.as-form').click(function (e) {
        e.preventDefault();
        $('<form>')
            .appendTo('body')
            .attr({method: 'POST', 'action': this.href})
            .append($.map($(this).data(), function (name, value) {
                return $('<input type="hidden">').attr('name', name).val(value)[0];
            }))
            .submit();
    });
});