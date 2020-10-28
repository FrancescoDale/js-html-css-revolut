$(document).ready(function() {

    // prendo il click su una delle a nel right_menu
    $('.right_menu a').click(function() {
        console.log('pronto!');

        // mostro il Menu
        $('.right_menu a').mouseenter(function() {
            $('.drop').addClass('drop_active');
        }
        );
    }
    );

}
);
