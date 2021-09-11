(function ($) {
    "use strict";
    //Xử lý thêm mới danh mục sản phẩm
    $("#FormAddProduct").submit(function (e) {
        // khi kèm file  => nhớ làm dạng này de nó hứng file
        var formData = new FormData();
        formData.append("TenSanPham", $("#TenSanPham").val());
        formData.append("IDDanhMuc", $("#IDDanhMuc").val());
        formData.append("GioiThieu", $("#GioiThieu").val());
        formData.append("MoTa", $("#MoTa").val());
        formData.append("DonGia", $("#DonGia").val());
        formData.append("GiaKhuyenMai", $("#GiaKhuyenMai").val());
        formData.append("SoLuongTon", $("#SoLuongTon").val());
        //...
        var arr = $('#ImageFile');
        formData.append('ImageFile', arr[0].files[0]);

        $.ajax(
            {
                url: "/Product/Add",
                data: formData,
                dataType: "text",
                type: "POST",
                // nhớ thêm 2 attribute này
                contentType: false,
                processData: false,

                success: function (response) {
                    if (response == 0) {
                        $(".message").html("Thêm sản phẩm mới thành công !!!");
                        $('#IDSanPham').val("");
                        $('#TenSanPham').val("");
                        $('#IDDanhMuc').val("");
                        $('#GioiThieu').val("");
                        $('#MoTa').val("");
                        $('#DonGia').val("");
                        $('#GiaKhuyenMai').val("");
                        $('#SoLuongTon').val("");
                        $('#Hinh').attr('src',);
                    }
                    else if (response == 1) {
                        $(".message").text("Trùng tên sản phẩm. Vui lòng chọn tên khác !!!");
                    }
                    else if (response == 2) {
                        $(".message").text("Có lỗi. Vui lòng kiểm tra lại !!!");
                    }
                },
                error: function (xhr, status, errMess) {
                    $(".message").text("Có lỗi:" + errMess);
                }
            });
        e.preventDefault();
    });

    // thêm đoạn dể xem preview file ảnh
    $("#ImageFile").change(function () {
        var input = $(this)[0];
        var a = $(this);
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // tùy theo bài
                $(a).next().attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    })

    //Load lại trang
    $("#btnClose").click(function (e) {
        location.reload();
    });

    $(".btn_FixProduct").click(function (e) {
        $.ajax({
            url: "/Product/GetbyID/",
            data: { ID: $(this).attr('data-id') },
            type: "GET",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                $('#IDSanPham').val(result.IDSanPham);
                $('#TenSanPham').val(result.TenSanPham);
                $('#IDDanhMuc').val(result.IDDanhMuc);
                $('#hiddenProductImage').val(result.Hinh);
                $('#Hinh').attr('src', "/assets/img/product/" + result.Hinh);
                $('#GioiThieu').val(result.GioiThieu);
                $('#MoTa').val(result.MoTa);
                $('#DonGia').val(result.DonGia);
                $('#GiaKhuyenMai').val(result.GiaKhuyenMai);
                $('#SoLuongTon').val(result.SoLuongTon);

                $('#myModal').modal('show');
                $('#btnUpdate_product').show();
                $('#btnAdd').hide();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
        return false;
    });

    //Load lại trang
    $("#btnClose2").click(function (e) {
        location.reload();
    });

    //Xóa sản phẩm
    $(".btn_DeleteProduct").click(function (e) {
        alert("Xóa sản phẩm");
        var $element = $(this);
        $.ajax(
            {
                url: '/Admin/Product/Delete',
                data: { idpro: $(this).attr('data-id') },
                type: "GET",
                success: function (response) {
                    // trường hợp = 0 , xóa thành công, xóa <tr>
                    if (response == 0) {
                        $element.closest("tr").remove();
                        $(".modal-bodydelete").text("Xóa thành công");
                    }
                    else if (response == 1) {
                        $(".modal-bodydelete").text("Sản phẩm không tồn tại");
                    }
                    else if (response == 2) {
                        $(".modal-bodydelete").text("Có lỗi");
                    }
                    // hiển thị thông báo
                    $('#modalDelete').modal('show');
                },
                error: function (xhr, status, errMess) {
                    $(".modal-bodydelete").text("Có lỗi :" + errMess);
                    $('#modalDelete2').modal('show');
                }
            });
        e.preventDefault();
    });

    //Function for clearing the textboxes
    //function clearTextBox() {
    //    $('#SanPhamID').val("");
    //    $('#Image').val("");
    //    $('#TenSanPham').val("");
    //    $('#DonGia').val("");
    //    $('#PromotionPrice').val("");
    //    $('#TomTat').val("");
    //    $('#Description').val("");
    //    $('#MetaKeyword').val("");
    //    $('#Quantity').val("");
    //    $('#DanhMucSanPhamID').val("");
    //    $('#Status').val("");
    //    $('#btnUpdate').hide();
    //    $('#btnAdd').show();
    //    $('#Image').css('border-color', 'lightgrey');
    //    $('#TenSanPham').css('border-color', 'lightgrey');
    //    $('#DonGia').css('border-color', 'lightgrey');
    //    $('#PromotionPrice').css('border-color', 'lightgrey');
    //    $('#TomTat').css('border-color', 'lightgrey');
    //    $('#Description').css('border-color', 'lightgrey');
    //    $('#MetaKeyword').css('border-color', 'lightgrey');
    //    $('#Quantity').css('border-color', 'lightgrey');
    //    $('#DanhMucSanPhamID').css('border-color', 'lightgrey');
    //    $('#Status').css('border-color', 'lightgrey');
    //}
    //Valdidation using jquery
    function validate() {
        var isValid = true;
        if ($('#Image').val().trim() == "") {
            $('#Image').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#Image').css('border-color', 'lightgrey');
        }
        if ($('#TenSanPham').val().trim() == "") {
            $('#TenSanPham').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#TenSanPham').css('border-color', 'lightgrey');
        }
        if ($('#DonGia').val().trim() == "") {
            $('#DonGia').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#DonGia').css('border-color', 'lightgrey');
        }
        if ($('#PromotionPrice').val().trim() == "") {
            $('#PromotionPrice').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#PromotionPrice').css('border-color', 'lightgrey');
        }
        if ($('#TomTat').val().trim() == "") {
            $('#TomTat').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#TomTat').css('border-color', 'lightgrey');
        }
        if ($('#Description').val().trim() == "") {
            $('#Description').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#Description').css('border-color', 'lightgrey');
        }
        if ($('#MetaKeyword').val().trim() == "") {
            $('#MetaKeyword').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#MetaKeyword').css('border-color', 'lightgrey');
        }
        if ($('#Quantity').val().trim() == "") {
            $('#Quantity').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#Quantity').css('border-color', 'lightgrey');
        }
        if ($('#DanhMucSanPhamID').val().trim() == "") {
            $('#DanhMucSanPhamID').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#DanhMucSanPhamID').css('border-color', 'lightgrey');
        }

        return isValid;
    }
})(jQuery);