
//Add Data Function   
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var abObj = {
        AboutID: $('#AboutID').val(),
        Banner: $('#Banner').val(),
        icon: $('#icon').val(),
        Image: $('#Image').val(),
        ContentProduct: $('#ContentProduct').val(),
        Avatar: $('#Avatar').val(),
        ContentPeople: $('#ContentPeople').val(),
        Name: $('#Name').val(),
        HappyCustomer: $('#HappyCustomer').val(),
        FarmerName: $('#FarmerName').val(),
        Position: $('#Position').val(),
        Summary: $('#Summary').val()
    };
    $.ajax({
        url: "About/Add",
        data: JSON.stringify(abObj),
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
function getbyID(AboutID) {
    $('#Banner').css('border-color', 'lightgrey');
    $('#icon').css('border-color', 'lightgrey');
    $('#Image').css('border-color', 'lightgrey');
    $('#ContentProduct').css('border-color', 'lightgrey');
    $('#Avatar').css('border-color', 'lightgrey');
    $('#ContentPeople').css('border-color', 'lightgrey');
    $('#Name').css('border-color', 'lightgrey');
    $('#HappyCustomer').css('border-color', 'lightgrey');
    $('#FarmerName').css('border-color', 'lightgrey');
    $('#Position').css('border-color', 'lightgrey');
    $('#Summary').css('border-color', 'lightgrey');
 
    $.ajax({
        url: "/About/getbyID/" + AboutID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#AboutID').val(result.AboutID);
            $('#Banner').val(result.Banner);
            $('#icon').val(result.icon);
            $('#Image').val(result.Image);
            $('#ContentProduct').val(result.ContentProduct);
            $('#Avatar').val(result.Avatar);
            $('#ContentPeople').val(result.ContentPeople);
            $('#Name').val(result.Name);
            $('#HappyCustomer').val(result.HappyCustomer);
            $('#FarmerName').val(result.FarmerName);
            $('#Position').val(result.Position);
            $('#Summary').val(result.Summary);
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
    var abObj = {
        AboutID: $('#AboutID').val(),
        Banner: $('#Banner').val(),
        icon: $('#icon').val(),
        Image: $('#Image').val(),
        ContentProduct: $('#ContentProduct').val(),
        Avatar: $('#Avatar').val(),
        ContentPeople: $('#ContentPeople').val(),
        Name: $('#Name').val(),
        HappyCustomer: $('#HappyCustomer').val(),
        FarmerName: $('#FarmerName').val(),
        Position: $('#Position').val(),
        Summary: $('#Summary').val()
    };
    $.ajax({
        url: "/About/Update",
        data: JSON.stringify(abObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
            $('#AboutID').val("");
            $('#Banner').val("");
            $('#icon').val("");
            $('#Image').val("");
            $('#ContentProduct').val("");
            $('#Avatar').val("");
            $('#ContentPeople').val("");
            $('#Name').val("");
            $('#HappyCustomer').val("");
            $('#FarmerName').val("");
            $('#Position').val("");
            $('#Summary').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
function Delete(AboutID) {
    var ans = confirm("Bạn có muốn xóa không?");
    if (ans) {
        $.ajax({
            url: "/About/Delete/" + AboutID,
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
    $('#AboutID').val("");
    $('#Banner').val("");
    $('#icon').val("");
    $('#Image').val("");
    $('#ContentProduct').val("");
    $('#Avatar').val("");
    $('#ContentPeople').val("");
    $('#Name').val("");
    $('#HappyCustomer').val("");
    $('#FarmerName').val("");
    $('#Position').val("");
    $('#Summary').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#Banner').css('border-color', 'lightgrey');
    $('#icon').css('border-color', 'lightgrey');
    $('#Image').css('border-color', 'lightgrey');
    $('#ContentProduct').css('border-color', 'lightgrey');
    $('#Avatar').css('border-color', 'lightgrey');
    $('#ContentPeople').css('border-color', 'lightgrey');
    $('#Name').css('border-color', 'lightgrey');
    $('#HappyCustomer').css('border-color', 'lightgrey');
    $('#FarmerName').css('border-color', 'lightgrey');
    $('#Position').css('border-color', 'lightgrey');
    $('#Summary').css('border-color', 'lightgrey');
}
//Valdidation using jquery  
function validate() {
    var isValid = true;
    if ($('#AboutID').val().trim() == "") {
        $('#AboutID').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#AboutID').css('border-color', 'lightgrey');
    }
    if ($('#Banner').val().trim() == "") {
        $('#Banner').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Banner').css('border-color', 'lightgrey');
    }
    if ($('#icon').val().trim() == "") {
        $('#icon').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#icon').css('border-color', 'lightgrey');
    }
    if ($('#Image').val().trim() == "") {
        $('#Image').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Image').css('border-color', 'lightgrey');
    }
    if ($('#ContentProduct').val().trim() == "") {
        $('#ContentProduct').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#ContentProduct').css('border-color', 'lightgrey');
    }
    if ($('#Avatar').val().trim() == "") {
        $('#Avatar').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Avatar').css('border-color', 'lightgrey');
    }
    if ($('#ContentPeople').val().trim() == "") {
        $('#ContentPeople').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#ContentPeople').css('border-color', 'lightgrey');
    }
    if ($('#Name').val().trim() == "") {
        $('#Name').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Name').css('border-color', 'lightgrey');
    }
    if ($('#HappyCustomer').val().trim() == "") {
        $('#HappyCustomer').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#HappyCustomer').css('border-color', 'lightgrey');
    }
    if ($('#FarmerName').val().trim() == "") {
        $('#FarmerName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#FarmerName').css('border-color', 'lightgrey');
    }
    if ($('#Position').val().trim() == "") {
        $('#Position').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Position').css('border-color', 'lightgrey');
    }
    if ($('#Summary').val().trim() == "") {
        $('#Summary').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Summary').css('border-color', 'lightgrey');
    }
    return isValid;
}