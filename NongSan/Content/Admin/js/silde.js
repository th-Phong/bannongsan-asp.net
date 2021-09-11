
//Add Data Function   
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var slObj = {
        SlideID: $('#SlideID').val(),
        slide1: $('#slide1').val(),
        Image: $('#Image').val(),
        Title: $('#Title').val(),
        Description: $('#Description').val(),
        Status: $('#Status').is(":checked") ? true : false
    };
   
    $.ajax({
        url: "/Slide/Add",
        data: JSON.stringify(slObj),
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
function getbyID(SlideID) {
    $('#slide1').css('border-color', 'lightgrey');
    $('#Image').css('border-color', 'lightgrey');
    $('#Title').css('border-color', 'lightgrey');
    $('#Description').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
    $.ajax({
        url: "/Slide/getbyID/" + SlideID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#SlideID').val(result.SlideID);
            $('#slide1').val(result.slide1);
            $('#Image').val(result.Image);
            $('#Title').val(result.Title);
            $('#Description').val(result.Description);
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
    var slObj = {
        SlideID: $('#SlideID').val(),
        slide1: $('#slide1').val(),
        Image: $('#Image').val(),
        Title: $('#Title').val(),
        Description: $('#Description').val(),
        Status: $('#Status').is(":checked") ? true : false
    };
    $.ajax({
        url: "/Slide/Update",
        data: JSON.stringify(slObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            location.reload();
            $('#myModal').modal('hide');
            $('#SlideID').val("");
            $('#slide1').val("");
            $('#Image').val("");
            $('#Title').val("");
            $('#Description').val("");
            $('#Status').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

function Delete(SlideID) {
    var ans = confirm("Bạn có muốn xóa không?");
    if (ans) {
        $.ajax({
            url: "/Slide/Delete/" + SlideID,
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
    $('#SlideID').val("");
    $('#slide1').val("");
    $('#Image').val("");
    $('#Title').val("");
    $('#Description').val("");
    $('#Status').val("");
    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#slide1').css('border-color', 'lightgrey');
    $('#Image').css('border-color', 'lightgrey');
    $('#Title').css('border-color', 'lightgrey');
    $('#Description').css('border-color', 'lightgrey');
    $('#Status').css('border-color', 'lightgrey');
}
//Valdidation using jquery  
function validate() {
    var isValid = true;
    if ($('#slide1').val().trim() == "") {
        $('#slide1').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#slide1').css('border-color', 'lightgrey');
    }
    if ($('#Image').val().trim() == "") {
        $('#Image').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Image').css('border-color', 'lightgrey');
    }
    if ($('#Title').val().trim() == "") {
        $('#Title').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Title').css('border-color', 'lightgrey');
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