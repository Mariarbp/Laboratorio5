$(document).ready(function() {

//Agrega los elementos
    $("#ButtonPost").on("click", function(select) {
        select.preventDefault()
        
        if ($("#todoText").val().length != 0) {
            var texto= $("<div>")
            texto.append('<input type="checkbox" name="all">');
            texto.append('<label class="lbl">'+$("#todoText").val()+'</label>');
            $("#todoList").append(texto);
        }
        $("#todoText").val("");
    });


  //Elimina todos los elementos 
    $("#ButtonDelete").on("click", function() {
        $("#todoList").empty();
    });


    //Marca todos los elementos 

    $("#ButtonMark").on("click", function() {
        var elements = $("input[name='all']")
        elements.prop("checked", true);
    });

    //Limpia todos los elementos 

    $("#ButtonClear").on("click", function() {
        var elements = $("input[name='all']")
        elements.prop("checked", false);
    });

  

  //Inspo 
  //https://stackoverflow.com/questions/52841572/jquery-append-changes-using-checkboxes
  //https://www.techiedelight.com/dynamically-create-checkbox-with-javascript/

  
});