$(document).ready(() => {
    console.log("in article show")
    $('.modal-trigger').hide(); //hiding 'New Article' button
    var id = $(this).data("id");

    //init modal is the create article modal
    $('#newNote').modal();
    $('.modal-content').modal();
    $('select').material_select();
    //add a note
    $('.create-note').on('click', function () {
        console.log("in create note");
        $('#newNote').modal('open');
        // var id = $(this).data("id");
        var id = "5a7bd1a4f5ad3721db121be2";
    });
    //EDIT Note to do 
    // $(".edit-note").on('click', function () {
    //     var id = $(this).data("id");

    //     $.ajax({
    //             method: "GET",
    //             url: "/articles/" + id
    //         })
    //         .done(function (note) {
    //             console.log("ARTICLE INFO\n\n" + JSON.stringify(article));

    //             $('#note-title').val(note.title);
    //             // $('#note-desc').val(note.summary);

    //             //set global to allow for PUT save event
    //             $('#modal1').modal('open');

    //         });
    // });

    // delete note to do

});