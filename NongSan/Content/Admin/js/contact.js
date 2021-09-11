 
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var ctObj = {
        ContactID: $('#ContactID').val(),
        Address: $('#Address').val(),
        Hotline: $('#Hotline').val(),
        Call: $('#Call').val(),
        Gmail: $('#Gmail').val(),
        Description: $('#Description').val()
    };
    $.ajax({
        url: "/Contact/Add",
        data: JSON.stringify(ctObj),
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
function getbyID(ContactID) {
    $('#Address').css('border-color', 'lightgrey');
    $('#Hotline').css('border-color', 'lightgrey');
    $('#Call').css('border-color', 'lightgrey');
    $('#Gmail').css('border-color', 'lightgrey');
    $('#Description').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Contact/getbyID/" + ContactID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#ContactID').val(result.ContactID);
            $('#Address').val(result.Address);
            $('#Hotline').val(result.Hotline);
            $('#Call').val(result.Call);
            $('#Gmail').val(result.Gmail);
            $('#Description').val(result.Description);
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
    var ctObj = {
        ContactID: $('#ContactID').val(),
        Address: $('#Address').val(),
        Hotline: $('#Hotline').val(),
        Call: $('#Call').val(),
        Gmail: $('#Gmail').val(),
        Description: $('#Description').val()
    };
    $.ajax({
        url: "/Contact/Update",
        data: JSON.stringify(ctObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
            $('#ContactID').val("");
            $('#Address').val("");
            $('#Hotline').val("");
            $('#Call').val("");
            $('#Gmail').val("");
            $('#Description').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//function for deleting sanployee's record  
function Delete(ContactID) {
    var ans = confirm("Bạn có muốn xóa không?");
    if (ans) {
        $.ajax({
            url: "/Contact/Delete/" + ContactID,
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
    $('#ContactID').val("");
    $('#Address').val("");
    $('#Hotline').val("");
    $('#Call').val("");
    $('#Gmail').val("");
    $('#Description').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Adress').css('border-color', 'lightgrey');
    $('#Hotline').css('border-color', 'lightgrey');
    $('#Call').css('border-color', 'lightgrey');
    $('#Gmail').css('border-color', 'lightgrey');
    $('#Description').css('border-color', 'lightgrey');
}
//Valdidation using jquery  
function validate() {
    var isValid = true;
    if ($('#Address').val().trim() == "") {
        $('#Address').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Address').css('border-color', 'lightgrey');
    }
    if ($('#Hotline').val().trim() == "") {
        $('#Hotline').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Hotline').css('border-color', 'lightgrey');
    }
    if ($('#Call').val().trim() == "") {
        $('#Call').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Call').css('border-color', 'lightgrey');
    }
    if ($('#Gmail').val().trim() == "") {
        $('#Gmail').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Gmail').css('border-color', 'lightgrey');
    }
    if ($('#Description').val().trim() == "") {
        $('#Description').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Description').css('border-color', 'lightgrey');
    }
    return isValid;
}