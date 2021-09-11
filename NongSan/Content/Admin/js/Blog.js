
//Add Data Function   
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var blObj = {
        BlogID: $('#BlogID').val(),
        Image: $('#Image').val(),
        TitleBlog: $('#TitleBlog').val(),
        Content: $('#Content').val(),
        DanhMucSanPhamID: $('#DanhMucSanPhamID').val(),
        CreateDate: $('#CreateDate').val(),
        SanPhamID: $('#SanPhamID').val(),
        Status: $('#Status').is(":checked") ? true : false
    };
    $.ajax({
        url: "/Admin/Blog/Add",
        data: JSON.stringify(blObj),
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
function getbyID(BlogID) {
    $('#Image').css('border-color', 'lightgrey');
    $('#TitleBlog').css('border-color', 'lightgrey');
    $('#Content').css('border-color', 'lightgrey');
    $('#DanhMucSanPhamID').css('border-color', 'lightgrey');
    $('#CreateDate').css('border-color', 'lightgrey');
    $('#SanPhamID').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Admin/Blog/GetbyID/" + BlogID,
        type: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#BlogID').val(result.BlogID);
            $('#Image').val(result.Image);
            $('#TitleBlog').val(result.TitleBlog);
            $('#Content').val(result.Content);
            $('#DanhMucSanPhamID').val(result.DanhMucSanPhamID);
            //$('#CreateDate').val(result.CreateDate);
            $('#SanPhamID').val(result.SanPhamID);
            $('#Status').val(result.Status);

            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            console.log(errormessage.responseText);
        }
    });
    return false;
}

function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var blObj = {
        BlogID: $('#BlogID').val(),
        Image: $('#Image').val(),
        TitleBlog: $('#TitleBlog').val(),
        Content: $('#Content').val(),
        DanhMucSanPhamID: $('#DanhMucSanPhamID').val(),
        CreateDate: $('#CreateDate').val(),
        SanPhamID: $('#SanPhamID').val(),
        Status: $('#Status').is(":checked") ? true : false
    };
    $.ajax({
        url: "/Admin/Blog/Update",
        data: JSON.stringify(blObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
            $('#BlogID').val("");
            $('#Image').val("");
            $('#TitleBlog').val("");
            $('#Content').val("");
            $('#DanhMucSanPhamID').val("");
            $('#CreateDate').val("");
            $('#SanPhamID').val("");
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
            url: "/Admin/Blog/Delete/" + ID,
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
//Function for clearing the textboxes  
function clearTextBox() {
    $('#BlogID').val("");
    $('#Image').val("");
    $('#TitleBlog').val("");
    $('#Content').val("");
    $('#DanhMucSanPhamID').val("");
    $('#CreateDate').val("");
    $('#SanPhamID').val("");
    $('#Status').val("");

    $('#btnUpdate').hide();
    $('#btnAdd').show();

    $('#Image').css('border-color', 'lightgrey');
    $('#TitleBlog').css('border-color', 'lightgrey');
    $('#Content').css('border-color', 'lightgrey');
    $('#DanhMucSanPhamID').css('border-color', 'lightgrey');
    $('#CreateDate').css('border-color', 'lightgrey');
    $('#SanPhamID').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
}
function validate() {
    var isValid = true;
    if ($('#Image').val().trim() == "") {
        $('#Image').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Image').css('border-color', 'lightgrey');
    }
    if ($('#TitleBlog').val().trim() == "") {
        $('#TitleBlog').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#TitleBlog').css('border-color', 'lightgrey');
    }
    if ($('#Content').val().trim() == "") {
        $('#Content').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Content').css('border-color', 'lightgrey');
    }
    if ($('#Status').val() == null) {
        $('#Status').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Status').css('border-color', 'lightgrey');
    }
    return isValid;
}
