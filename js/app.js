$('document').ready(function(){
    $('.burger').on('click', function(){
        if ($(".openMobileMenu").hasClass("show")) {
            $(".openMobileMenu").removeClass('show');
            $(".openMobileMenu").addClass('hide');
            $(".closeMobileMenu").removeClass('hide');
            $(".closeMobileMenu").addClass('show');
        } else {
            $(".openMobileMenu").removeClass('hide');
            $(".openMobileMenu").addClass('show');
            $(".closeMobileMenu").removeClass('show');
            $(".closeMobileMenu").addClass('hide');
        }
        $(".nav").toggleClass('show');
    });
});