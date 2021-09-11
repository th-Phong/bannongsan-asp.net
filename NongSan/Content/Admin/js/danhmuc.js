(function ($) {
    "use strict";

    //Xử lý thêm mới danh mục sản phẩm
    $("#FormAddCategory").submit(function (e) {
        $.ajax(
            {
                url: "/Category/Add",
                data: $(this).serialize(),
                dataType: "text",
                type: "POST",
                success: function (response) {
                    $(".message").html(response);
                    $('#TenDanhMuc').val("");
                },
                error: function (xhr, status, errMess) {
                    $(".message").text("Có lỗi:" + errMess);
                }
            });
        e.preventDefault();
    });

    //Xóa message
    $("#TenDanhMuc").focus(function (e) {
        $(".message").text("");
    });

    //Load lại trang
    $("#btnClose").click(function (e) {
        location.reload();
    });
    //Load lại trang
    $("#btnClose_modal").click(function (e) {
        location.reload();
    });

    //Xóa danh mục sản phẩm
    $(".btn_DeleteCate").click(function (e) {
        alert("Xóa danh mục");
        var $element = $(this);
        $.ajax(
            {
                url: '/Admin/Category/Delete',
                data: { idcate: $(this).attr('data-id') },
                type: "GET",
                success: function (response) {
                    // trường hợp = 0 , xóa thành công, xóa <tr>
                    if (response == 0) {
                        $element.closest("tr").remove();
                        $(".modal-bodydelete").text("Xóa thành công");
                    }
                    else if (response == 1) {
                        $(".modal-bodydelete").text("Danh mục không tồn tại");
                    }
                    else if (response == 2) {
                        $(".modal-bodydelete").text("Có lỗi");
                    }
                    // hiển thị thông báo
                    $('#modalDelete').modal('show');
                },
                error: function (xhr, status, errMess) {
                    $(".modal-bodydelete").text("Có lỗi :" + errMess);
                    $('#modalDelete').modal('show');
                }
            });
        e.preventDefault();
    });
    //Lấy thông tin danh mục đưa lên form sửa
    $(".btn_FixCate").click(function (e) {
        $('#TenDanhMuc').css('border-color', 'lightgrey');
        $.ajax({
            url: "/Category/getbyID/",
            data: { ID: $(this).attr('data-id') },
            type: "GET",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                $('#IDDanhMuc').val(result.IDDanhMuc);
                $('#TenDanhMuc').val(result.TenDanhMuc);

                $('#myModal').modal('show');
                $('#btnUpdate').show();
                $('#btnAdd').hide();
            },
            error: function (errormessage) {
                console.log(errormessage.responseText);
            }
        });
        return false;
    });
})(jQuery);