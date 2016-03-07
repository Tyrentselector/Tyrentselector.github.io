(function($) {
    $(function() {
        var documentWidth = $(document).width();
        if (documentWidth >= 970) {
            $('.dropdown').on({
                'mouseover': function() {
                    console.log($(this).children('.dropdown-toggle'));
                    $(this).children('.dropdown-toggle').dropdown('toggle');
                },
                'mouseout': function() {
                    $(this).children('.dropdown-toggle').dropdown('toggle');
                }
            });
        }
    });
})(jQuery);
