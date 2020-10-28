$(document).ready(function() {

    // prendo il click su una delle a nel right_menu
    $('.right_menu a').click(function() {
        console.log('pronto!');

        $('.drop').addClass('drop_active');

        // mostro il Menu
        // $('.right_menu a').click(function() {
        //     $('.drop').addClass('drop_active');
        // }
        // );
    }
    );

}
);
