

//Add Data Function   
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var ftObj = {
        FooterID: $('#FooterID').val(),
        Content: $('#Content').val(),
        Status: $('#Status').is(":checked") ? true : false
    };
    //var requrl = '@Url.Action("Add", "Footer", null, Request.Url.Scheme, null)';
    $.ajax({
        url: "/Footer/Add",
        data: JSON.stringify(ftObj),
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
function getbyID(FooterID) {
    $('#Content').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Footer/getbyID/" + FooterID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#FooterID').val(result.FooterID);
            $('#Content').val(result.Content);
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

//function for updating sanployee's record  
function Update() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var ftObj = {
        FooterID: $('#FooterID').val(),
        Content: $('#Content').val(),
        Status: $('#Status').is(":checked")? true: false
    };
    $.ajax({
        url: "/Footer/Update",
        data: JSON.stringify(ftObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
            $('#FooterID').val("");
            $('#Content').val("");
            $('#Status').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//function for deleting sanployee's record  
function Delete(FooterID) {
    var ans = confirm("Bạn có muốn xóa không?");
    if (ans) {
        $.ajax({
            url: "/Footer/Delete/" + FooterID,
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
    $('#FooterID').val("");
    $('#Content').val("");
    $('#Status').val("");
    
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#FooterID').css('border-color', 'lightgrey');
    $('#Content').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
}
//Valdidation using jquery  
function validate() {
    var isValid = true;
    if ($('#Content').val().trim() == "") {
        $('#Content').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Content').css('border-color', 'lightgrey');
    }
    return isValid;
}