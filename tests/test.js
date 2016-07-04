QUnit.test("-as-back", function (assert) {
    var done = assert.async();

    $('<form>').appendTo('#qunit-fixture')
        .append($('<a href="#" class="-as-button">'))

});