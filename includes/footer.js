$('.linktoggle_menu').on('click',function(e){
    $('.nav-sidebar-area').toggleClass('open');
});

$('.toggle-button').on('click',function(e){
    $('.nav-sidebar-area').toggleClass('open');
});

document.write("<footer class='row'>\
    <div class='col-sm-12'>\
        <div class='row'>\
            <div class='col-sm-12 tfoot'>\
                <div class='footer-outer'>\
                    <div class='fauxborder-left footer-fauxborder-left'>\
                        <div class='fauxborder-right footer-fauxborder-right'></div>\
                        <div class='region-inner footer-inner'>\
                        </div>\
                    </div>\
                    <div class='footer-cap-bottom cap-bottom'>\
                        <div class='cap-left'></div>\
                        <div class='cap-right'></div>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class='row' id='creditlink'>\
            <div class='col-sm-12 text-center' id='credit-blsm'>\
                (C) Copyright 2017 - "+ new Date().getFullYear()+", \
                <a href='home.html'>Shakir Rasool Bhatt</a>.\
            </div>\
        </div>\
    </div>\
</footer>");