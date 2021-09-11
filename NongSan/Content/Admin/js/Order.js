//Load Data in Table when documents is ready
(function ($) {
    "use strict";

    $(".btn_FixOrder").click(function (e) {
        //$('#IDDonHang').css('border-color', 'lightgrey');
        //$('#ShipTenNguoiDat').css('border-color', 'lightgrey');
        //$('#ShipMobile').css('border-color', 'lightgrey');
        //$('#ShipAddress').css('border-color', 'lightgrey');
        //$('#ShipEmail').css('border-color', 'lightgrey');
        //$('#Status').css('border-color', 'lightgrey');
        //$('#UserID').css('border-color', 'lightgrey');
        //$('#TongTien').css('border-color', 'lightgrey');
        $.ajax({
            url: "/Order/GetbyID/",
            data: { ID: $(this).attr('data-id') },
            type: "GET",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                $('#IDDonHang').val(result.IDDonHang);
                $('#ShipTenNguoiDat').val(result.ShipTenNguoiDat);
                $('#UserName').val(result.UserName);
                $('#ShipSoDienThoai').val(result.ShipSoDienThoai);
                $('#ShipDiaChi').val(result.ShipDiaChi);
                $('#ShipEmail').val(result.ShipEmail);
                $('#ShipGhiChu').val(result.ShipGhiChu);
                $('#HinhThucThanhToan').val(result.HinhThucThanhToan);
                $('#TrangThaiDonHang').val(result.TrangThaiDonHang);
                //var tien = result.TongTien;
                //var money = parseInt(tien).toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
                $('#TongTien').val(result.TongTien);

                $('#myModal').modal('show');
                $('#btnUpdate_order').show();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
        return false;
    });

    //function for deleting sanployee's record
    //function Delete(ID) {
    //    var ans = confirm("Bạn có muốn xóa không ?");
    //    if (ans) {
    //        $.ajax({
    //            url: "/Order/Delete/" + ID,
    //            type: "POST",
    //            contentType: "application/json;charset=UTF-8",
    //            dataType: "json",
    //            success: function (result) {
    //                location.reload();
    //            },
    //            error: function (errormessage) {
    //                alert(errormessage.responseText);
    //            }
    //        });
    //    }
    //}

    //Valdidation using jquery
    function validate() {
        var isValid = true;
        if ($('#CreateDate').val == null) {
            $('#CreateDate').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#CreateDate').css('border-color', 'lightgrey');
        }
        if ($('#ShipName').val().trim() == "") {
            $('#ShipName').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#ShipName').css('border-color', 'lightgrey');
        }
        if ($('#ShipMobile').val().trim() == "") {
            $('#ShipMobile').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#ShipMobile').css('border-color', 'lightgrey');
        }
        if ($('#ShipAddress').val().trim() == "") {
            $('#ShipAddress').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#ShipAddress').css('border-color', 'lightgrey');
        }
        if ($('#ShipEmail').val().trim() == "") {
            $('#ShipEmail').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#ShipEmail').css('border-color', 'lightgrey');
        }

        if ($('#Status').val().trim() == "") {
            $('#Status').css('border-color', 'Red');
            isValid = false;
        }
        else {
            $('#Status').css('border-color', 'lightgrey');
        }

        return isValid;
    }
})(jQuery);