﻿(function ($) {
    "use strict";

    /*----------------------------
       stickey menu
    ----------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 165) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });

    /*----------------------------
    jQuery MeanMenu
    ------------------------------ */
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "9901",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });

    /* slider activation */
    $('.slider_list').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 1,
    });
    $('.features_product_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 6,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            },
            1600: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    });
    $('.shop-product_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            },

            1300: {
                items: 4,
                nav: true,
                loop: false
            },
            1600: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });

    $('.best_selling_product_list').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            575: {
                items: 2,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            },
            1500: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });

    $('.category_product_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 2,
                nav: false
            },
            1200: {
                items: 3,
                nav: false
            },
        }
    });

    $('.brand_list_carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass: true,
        responsive: {
            320: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            991: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: false
            },
        }
    });
    $('.features_product_three_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            },
            1200: {
                items: 4,
                nav: true,
                loop: false
            },
        }
    });

    $('.features_product_four_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            },
            1200: {
                items: 4,
                nav: true,
                loop: false
            },
        }
    });
    $('.pos_special_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i> prev', 'next <i class="fa fa-angle-right"></i>'],
        items: 1,
    });
    $('.features_product_active_three').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            },
        }
    });

    $('.features_product_active_four').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            },
        }
    });

    $('.best_selling_product_three').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
                nav: false
            },
            992: {
                items: 1,
                nav: false
            },
        }
    });

    $('.related_product_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
        }
    });

    $('.product_nav_active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        items: 3,
    });

    $('.testimonial___wrapper').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true,
    });
    /*------ Wow activation ----*/
    new WOW().init();

    /*--------------------------
     ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*header_account slideToggle*/

    $(".account_inner > a").on("click", function () {
        $('.content-setting-dropdown').slideToggle('medium');
    });

    /*countdown activation*/

    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="countdown_area"><div class="single_coutdown"><div class="content-number">%D</div><div class="content-title">DAYS</div></div><div class="single_coutdown"><div class="content-number">%H</div><div class="content-title">HOURS</div></div><div class="single_coutdown"><div class="content-number">%M</div><div class="content-title">MINUTES</div></div><div class="single_coutdown"><div class="content-number">%S</div><div class="content-title">SECONDS</div></div></div>'));
        });
    });

    /*----------------------------
        Cart Plus Minus Button
    ------------------------------ */
    //var CartPlusMinus = $('.cart-plus-minus');

    //CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    //CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(document).on('click', '.qtybutton', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    /*----------------------------
        slider-range here
    ------------------------------ */
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
    /*------------------------
        video popup here
     -----------------------*/

    $('.video__trigger').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    /*------------------------------
      Category menu Activation
    ------------------------------*/
    $(".button_categories h4 > a").on("click", function () {
        $('.categories_menu').slideToggle();
    });
    $('#cat_toggle li.has-sub > a,.shop_toggle li.has-sub > a').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');

            element.find('li').removeClass('open');

            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });
    $('#cat_toggle > ul > li.has-sub > a,.shop_toggle li.has-sub > a').append('<span class="holder"></span>');

    /*------------------------------
      Active
    ------------------------------*/
    //$(function () {
    //    $('ul.navbar_head li a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
    //    $('ul.navbar_head li a').click(function () {
    //        $(this).parent().addClass('active').siblings().removeClass('active')
    //    })
    //})

    $(function () {
        $('ul.shop_toggle li a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
        $('ul.shop_toggle li a').click(function () {
            $(this).parent().addClass('active').siblings().removeClass('active')
        })
    })

    /*------------------------------
     ADD TO CART
   ------------------------------*/
    $(document).on('click', ".product__hover ul li .addcart", function (e) {
        $.ajax({
            url: "/Cart/AddToCart",
            data: { idpro: $(this).attr("idpro"), quantity: $(this).attr("quantity"), weight: $(this).attr("weight") },
            success: function (response) {
                //response : object , text, view,...
                $.ajax({
                    url: "/Cart/MiniCartHeader",
                    success: function (response) {
                        $(".mini__cart").html(response);
                    }
                });
            }
        });
        e.preventDefault();
    })
    /*------------------------------
     DETAIL PRODUCT
   ------------------------------*/
    //$(".detail_product_incart").click(function (e) {
    //    $.ajax({
    //        url: "/SanPham/ChiTietSanPham",
    //        data: { idpro: $(this).attr("idpro") },
    //        success: function (response) {
    //            //response : object , text, view,...
    //            //$.ajax({
    //            //    url: "/Cart/MiniCartHeader",
    //            //    success: function (response) {
    //            //        $(".mini__cart").html(response);
    //            //    }
    //            //});
    //            $(".bodycontent2").html(response);
    //        }
    //    });
    //    //var targetUrl = '/chi-tiet-san-pham-' + $(this).attr("idpro");
    //    //location.href = targetUrl;
    //    e.preventDefault();
    /*})*/

    /*------------------------------
     CHANGE QUATITY IN CART
   ------------------------------*/
    $(document).on('click', ".cart_page .qtybutton", function () {
        $.ajax({
            url: "/Cart/UpdateCart",
            data: { idpro: $(this).parent().find('input').attr("idpro"), quantity: $(this).parent().find('input').val() },
            success: function (reponse) {
                if (reponse == 'reload') {
                    location.reload();
                }
                else {
                    $.ajax({
                        url: "/Cart/MiniCartHeader",
                        success: function (response) {
                            $(".mini__cart").html(response);
                            $.ajax({
                                url: "/Cart/SubTotal",
                                success: function (reponse) {
                                    document.getElementById("cart_subtotal").innerHTML = "<span>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";
                                    $.ajax({
                                        url: "/Cart/Total_Coupon",
                                        data: { coupon: $('#coupon_cart').val() },
                                        success: function (reponse) {
                                            document.getElementById("order_total").innerHTML = "<span><strong>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + "</strong></span>";
                                            //alert($('#coupon_cart').val());
                                        }
                                    })
                                }
                            })
                        }
                    });
                }
            }
        })
        var idforprice = 'product-price-cart ' + $(this).parent().find('input').attr("idpro");  //id for price product
        var price = ($(this).parent().find('input').val()) * (document.getElementById(idforprice).getAttribute('priceproduct'));
        var id = "product_subtotal " + $(this).parent().find('input').attr("idpro"); //id for price*quantity
        /*alert(document.getElementById(idforprice).getAttribute('priceproduct'));*/
        document.getElementById(id).innerHTML = "<span>" + price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";
    })

    /*------------------------------
       COUPON IN CART => CHANGE PRICE CART
     ------------------------------*/
    $(document).on('click', "#apply_coupon", function (e) {
        $.ajax({
            url: "/Cart/Total_Coupon",
            data: { coupon: $('#coupon_cart').val() },
            success: function (reponse) {
                document.getElementById("order_total").innerHTML = "<span><strong>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + "</strong></span>";
                document.getElementById("cart_discount").innerHTML = "<span><strong>" + 10% + "</strong></span>";
                /*alert(reponse);*/
            }
        })
        e.preventDefault();
    })
    //var price = ($(this).parent().find('input').val()) * ($('.product-price-cart').attr('priceproduct'));
    //document.getElementById("product_subtotal").innerHTML = "<span>" + price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";
    //document.getElementById("cart_subtotal").innerHTML = "<span>" + price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";
    //document.getElementById("order_total").innerHTML = "<span>" + price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";

    /*------------------------------
    CHANGE WEIGHT IN CART
    ------------------------------*/
    //$('.weight').change(function () {
    //    $.ajax({
    //        url: "/Cart/UpdateCart",
    //        data: { idpro: $(this).attr("idpro"), quantity: $(this).attr("quantity"), weight: $(this).val() },
    //        success: function (reponse) {
    //            $.ajax({
    //                url: "/Cart/CartIndex",
    //                success: function (response) {
    //                    window.location.href = "/Cart/CartIndex";
    //                    //$(".body_cart").empty;
    //                    /*$(".cart_main_area").html(response);*/
    //                }
    //            });
    //        }
    //    })
    //    /*alert($(this).attr("quantity"))*/
    //});
    /*------------------------------
    CHANGE CATEGORY IN SHOP IN INDEX
    ------------------------------*/
    //$(document).on('click', '.danhmuc li a', function (e) {
    //    $.ajax({
    //        url: "/Home/Change_TabProduct",
    //        data: { iddanhmuc: $(this).attr("iddanhmuc") },
    //        success: function (response) {
    //            /*alert(response);*/
    //            $(".tab-content").html(response);
    //        }
    //    })
    //    e.preventDefault();

    //});

    /*------------------------------
    PHÂN TRANG - SHOPINDEX
    ------------------------------*/
    $(document).on('click', ".page_list_clearfix ul li a", function (e) {
        var pagelinkThis = $(this);
        $.ajax({
            url: "/SanPham/PhanTrang_ShopIndex/",
            data: { page: $(pagelinkThis).attr('data-page') },
            success: function (response) {
                $("#shop_active").html(response);
                $('.page_list_clearfix ul li').removeClass('current_page');
                $(pagelinkThis).parent().addClass('current_page');
            }
        })
        e.preventDefault($(pagelinkThis).attr('data-page'));
    })
    /*------------------------------
    PHÂN TRANG - SHOPINDEX -previous page
    ------------------------------*/
    $(document).on('click', ".prev", function (e) {
        var pagelinkThis = $(".current_page a").attr("data-page");

        if (pagelinkThis == 1) {
            return
        }
        else {
            var prev_page = pagelinkThis - 1;
            $.ajax({
                url: "/SanPham/PhanTrang_ShopIndex/",
                data: { page: prev_page },
                success: function (response) {
                    $("#shop_active").html(response);
                    $('.page_list_clearfix ul li.current_page a').parent().prev('li').addClass('current_page');
                    $('.page_list_clearfix ul li.current_page a').parent().next('li').removeClass('current_page');
                }
            })
        }
        e.preventDefault();
    })
    /*------------------------------
   PHÂN TRANG - SHOPINDEX - next page
   ------------------------------*/
    $(document).on('click', ".next", function (e) {
        var pagelinkThis = $(".current_page a").attr("data-page");//lay trang hien tai
        var totalpage = $(".next a").attr("data-max-page");//lay tong trang
        if (pagelinkThis == totalpage) {
            return
        }
        else {
            pagelinkThis = +pagelinkThis + 1;
            $.ajax({
                url: "/SanPham/PhanTrang_ShopIndex/",
                data: { page: pagelinkThis },
                success: function (response) {
                    $("#shop_active").html(response);
                    $('.page_list_clearfix ul li.current_page a').parent().next('li').addClass('current_page');
                    $('.page_list_clearfix ul li.current_page a').parent().prev('li').removeClass('current_page');
                }
            })
        }
        e.preventDefault();
    })
    /*------------------------------
      - SHOPINDEX - SAN PHAM THEO DANH MUC-Chua phan trang
      ------------------------------*/
    $(document).on('click', '.shop_toggle li a', function (e) {
       /* alert($(this).parent().attr("data-danhmuc"));*/
        $.ajax({
            url: "/SanPham/LoadAjax_SanPhamDanhMuc/",
            data: { id: $(this).parent().attr("data-danhmuc") },
            success: function (response) {
                $("#shop_content").html(response);
            }
        })
        e.preventDefault();
        /*alert($(this).parent().attr("data-danhmuc"));*/
    });

    //$(function () {
    //    $('.sub_menu li a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
    //    $('.sub_menu li a').click(function () {
    //        $(".navbar_head li").removeClass('active')
    //        $("#shopinhead").addClass('active').siblings().removeClass('active')
    //    })
    //})

    /*------------------------------
      - Detail product => Add to cart
      ------------------------------*/
    $(document).on('click', '.add_button button', function (e) {
        $.ajax({
            url: "/Cart/AddToCart",
            data: { idpro: $(this).attr("idpro"), quantity: $(".detailpro .qtybutton").parent().find('input').val() }/*, weight: $("#group_1").val() }*/,
            success: function (reponse) {
                $.ajax({
                    url: "/Cart/MiniCartHeader",
                    success: function (response) {
                        $(".mini__cart").html(response);
                    }
                });
            }
        })
        //alert($(this).attr("idpro"));
        ///*alert($("#group_1").val());*/
        //alert($("#detail_price").attr("price"));
        //alert($(".detailpro .qtybutton").parent().find('input').val());
    });

    /*------------------------------
    - Detail product => change WEIGHT => change PRICE
    ------------------------------*/
    //(function () {
    //    var previous;
    //    var currentprice;
    //    var newprice;
    //    $("#group_1").focus(function () {
    //        // Store the current value on focus, before it changes
    //        previous = this.value;//weight old
    //        currentprice = $(".current_price").attr("price");
    //    }).change(function () {
    //        // Do soomething with the previous value after the change

    //        newprice = (currentprice / previous * this.value)
    //        $("#detail_price").attr("price", newprice);
    //        document.getElementById("detail_price").innerHTML = "<span>" + newprice.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";
    //        /*previous = this.value;//weight new*/
    //    });
    //});

    /*------------------------------
    - Delete one product in cart
    ------------------------------*/

    //$(document).on('click', '.product-remove a,.cart_remove a', function (e) {
    //    $('#exampleModal').modal('show');
    //    e.preventDefault();
    //});
    $(document).on('click', '#agreedelete_incart', function (e) {
        var proId = $("#hiddenProductId").val();
        /*alert(proId);*/
        $.ajax({
            type: "POST",
            url: "/Cart/DeleteOneProductInCart",
            data: { idproduct: proId },
            success: function (result) {
                if (result == "reload") {
                    location.reload();
                }
                else {
                    $("#exampleModal").modal("hide");
                    $("#idproduct_" + proId).remove();
                    $("#minicart_" + proId).remove();
                    $.ajax({
                        url: "/Cart/SubTotal",
                        success: function (reponse) {
                            document.getElementById("cart_subtotal").innerHTML = "<span>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";
                            $.ajax({
                                url: "/Cart/Total_Coupon",
                                data: { coupon: $('#coupon_cart').val() },
                                success: function (reponse) {
                                    document.getElementById("order_total").innerHTML = "<span><strong>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + "</strong></span>";
                                    $.ajax({
                                        url: "/Cart/MiniCartHeader",
                                        success: function (response) {
                                            $(".mini__cart").html(response);
                                        }
                                    });
                                }
                            })
                        }
                    })
                }
            }
        })
    });
    /*------------------------------
    - Check information
    ------------------------------*/
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    function validate() {
        const $result = $("#result");
        const email = $("#email").val();
        $result.text("");

        if (validateEmail(email)) {
            $result.text(email + " is valid :)");
            $result.css("color", "green");
            $("#email").css("border", "1px solid green");
            return true;
        } else {
            $result.text(email + " is not valid :(");
            $result.css("color", "red");
            $("#email").css("border", "1px solid red");
            return false;
        }
    }
    $("#email").on("input", validate);

    function validatePhone(phone) {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        return re.test(phone);
    }
    function phonenumber() {
        const $result = $("#resultphone");
        const phone = $("#phone").val();
        $result.text("");

        if (validatePhone(phone)) {
            $result.text(phone + " is valid :)");
            $result.css("color", "green");
            $("#phone").css("border", "1px solid green");
            return true;
        }
        else {
            $result.text(phone + " is not valid :(");
            $result.css("color", "red");
            $("#phone").css("border", "1px solid red");
            return false;
        }
    }
    $("#phone").on("input", phonenumber);

    /*------------------------------
    - CHECKOUT -
    ------------------------------*/
    //$(document).on('click', '#btnsubmitcheckout', function () {
    //    //var proId = $("#hiddenProductId").val();
    //    var phone1 = phonenumber();
    //    var email1 = validate()
    //    if ((phone1 == false) || (email1 == false)) {
    //        alert((phone1 == false) || (email1 == false));
    //        return false;
    //    }
    //else
    //    document.$("#frmCheckout").submit();
    //$.ajax({
    //    type: "POST",
    //    url: "/Cart/DeleteOneProductInCart",
    //    data: { idproduct: proId },
    //    success: function (result) {
    //        $("#exampleModal").modal("hide");
    //        $("#idproduct_" + proId).remove();
    //        $("#minicart_" + proId).remove();
    //        $.ajax({
    //            url: "/Cart/SubTotal",
    //            success: function (reponse) {
    //                document.getElementById("cart_subtotal").innerHTML = "<span>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + " </span>";
    //                $.ajax({
    //                    url: "/Cart/Total_Coupon",
    //                    data: { coupon: $('#coupon_cart').val() },
    //                    success: function (reponse) {
    //                        document.getElementById("order_total").innerHTML = "<span><strong>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + "</strong></span>";
    //                        $.ajax({
    //                            url: "/Cart/MiniCartHeader",
    //                            success: function (response) {
    //                                $(".mini__cart").html(response);
    //                            }
    //                        });
    //                    }
    //                })
    //            }
    //        })
    //    }
    //})
    /*});*/
    /*------------------------------
    - CHECKOUT click-
    ------------------------------*/
    //$(document).on('click', ".checkout", function (e) {
    //    var count = $(this).attr("total_product")
    //    e.preventDefault();

    //    if (count > 0) {
    //        alert('click checkout' + count);
    //        //$.ajax({
    //        //    url: "/Cart/Total_Coupon",
    //        //    data: { coupon: $('#coupon_cart').val() },
    //        //    success: function (reponse) {
    //        //        document.getElementById("order_total").innerHTML = "<span><strong>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + "</strong></span>";
    //        //        document.getElementById("cart_discount").innerHTML = "<span><strong>" + parseInt(reponse).toLocaleString('it-IT', { style: 'currency', currency: 'VND' }); + "</strong></span>";
    //        //        /*alert(reponse);*/
    //        //    }
    //        //})
    //    }
    //})
})(jQuery);