
//Add Data Function   
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var dmspObj = {
        DanhMucSanPhamID: $('#DanhMucSanPhamID').val(),
        TenDanhMucSanPham: $('#TenDanhMucSanPham').val(),
        MetaKeyword: $('#MetaKeyword').val(),
        DanhMucID: $('#DanhMucID').val(),
        Status: $('#Status')
    };
    $.ajax({
        url: "/DanhMucSanPham/Add",
        data: JSON.stringify(dmspObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function getbyID(DanhMucSanPhamID) {
    $('#TenDanhMucSanPham').css('border-color', 'lightgrey');
    $('#MetaKeyword').css('border-color', 'lightgrey');
    $('#DanhMucID').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
    $.ajax({
        url: "/DanhMucSanPham/getbyID/" + DanhMucSanPhamID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#DanhMucSanPhamID').val(result.DanhMucSanPhamID);
            $('#TenDanhMucSanPham').val(result.TenDanhMucSanPham);
            $('#MetaKeyword').val(result.MetaKeyword);
            $('#DanhMucID').val(result.DanhMucID);
            $('#Status').val(result.Status);

            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}

 
function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var dmspObj = {
        DanhMucSanPhamID: $('#DanhMucSanPhamID').val(),
        TenDanhMucSanPham: $('#TenDanhMucSanPham').val(),
        MetaKeyword: $('#MetaKeyword').val(),
        DanhMucID: $('#DanhMucID').val(),
        Status: $('#Status')
    };
    $.ajax({
        url: "/DanhMucSanPham/Update",
        data: JSON.stringify(dmspObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
            $('#DanhMucSanPhamID').val("");
            $('#TenDanhMucSanPham').val("");
            $('#MetaKeyword').val("");
            $('DanhMucID').val();
            $('#Status').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}


function Delete(ID) {
    var ans = confirm("Bạn có muốn xóa không?");
    if (ans) {
        $.ajax({
            url: "/DanhMucSanPham/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                location.reload();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}
function clearTextBox() {
    $('#DanhMucSanPhamID').val("");
    $('#TenDanhMucSanPham').val("");
    $('#MetaKeyword').val("");
    $('#DanhMucID').val("");
    $('#Status').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#TenDanhMucSanPham').css('border-color', 'lightgrey');
    $('#MetaKeyword').css('border-color', 'lightgrey');
    $('#DanhMucID').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
}
//Valdidation using jquery  
function validate() {
    var isValid = true;
    if ($('#TenDanhMucSanPham').val().trim() == "") {
        $('#TenDanhMucSanPham').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#TenDanhMucSanPham').css('border-color', 'lightgrey');
    }
    if ($('#MetaKeyword').val().trim() == "") {
        $('#MetaKeyword').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#MetaKeyword').css('border-color', 'lightgrey');
    }
    if ($('#DanhMucID').val().trim() == "") {
        $('#DanhMucID').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#DanhMucID').css('border-color', 'lightgrey');
    }
    return isValid;
}
