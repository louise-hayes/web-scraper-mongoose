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

        $('#saveNote').on('click', function () {

            console.log("in save note");

            // $('#newNote').modal('open');
            var id = $(this).data("id");
            // var id = "5a7bd1a4f5ad3721db121be2";
            const note = {};
            note.title = $('#note-title').val().trim();
            note.body = $('#note-body').val().trim();

            console.log("NEW NOTE\n");
            console.log(note);


            $.ajax({
                    method: "POST",
                    url: "/articles/" + id,
                    data: note
                })
                .done(function () {
                    //update elements without reloading page

                    $('#note-title').val(note.title);
                    $('#note-body').val(note.body);
                    Materialize.toast('Note Saved!', 4000)

                });
        });
    });



    // EDIT Note to do 
    $(".note-see").on('click', function () {
        var id = $(this).data("id");
        console.log("note edit");
        $.ajax({
                method: "PUT",
                url: "/notes/" + id
            })
            .done(function (note) {
                console.log("NOTE INFO\n\n" + JSON.stringify(note));

                $('#note-title').val(note.title);
                $('#note-body').val(note.body);
                //set global to allow for PUT save event
                $('#newNote').modal('open');

            });
    });


    //DELETE EVENT

    $(".note-delete").on('click', function () {
        var id = $(this).data("Id");
        console.log("note-delete");
        $.ajax({
                method: "DELETE",
                url: "/articles/" + id
            })
            .done(function (note) {
                window.location.reload();
                console.log("Article INFO\n\n" + JSON.stringify(note));
            });

    });

    //View Note
    $(".note-see").on('click', function () {
        console.log("note-see");
        var id = $(this).data("noteid");

        // current base url address
        window.location.href = window.location.origin + "/notes/" + id

    });

});