



$(function() {
    $(".icon-menu").click(function(event) {
        $(".main-content__sidebar").toggleClass("active");
    });
//      $(document).click(function (event) {
//         if ($(event.target).closest('.main-content__sidebar').length == 0 && $(event.target).attr('class') != 'icon-menu') {
//             $('.main-content__sidebar').removeClass("active");
//             event.stopPropagation();
// 	    }
//     });
});

