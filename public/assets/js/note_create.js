$(document).ready(() => {
    console.log("in note create")
    $('.modal-trigger').hide(); //hiding 'New Article' button
    var id = $(this).data("id");

    //init modal is the create article modal
    // $('#newNote').modal();
    // $('.modal-content').modal();
   

    // $('select').material_select();
    // //add a note

    $('#saveNote').on('click', function () {

        console.log("in save note");
   
        // $('#newNote').modal('open');
        var id = $(this).data("id");
        // var id = "5a7bd1a4f5ad3721db121be2";
        // 5a7bd1a4f5ad3721db121be2
        const note = {};
        // note.title = $('#note-title').val().trim();
        // note.body = $('#note-body').val().trim();
        note.title = req.body.title;
        note.body = req.body.body;

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