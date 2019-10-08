$(document).ready(function(){
    var disney = ["Tinker Bell","Evil Queen", "Mickey Mouse", "Pocahontas", "Mother Gothel", "Pascal", "Mowgli", "Li Shang", "Megara", "Simba"]; 
    for(var i = 0; i < disney.length; i++){
        var newButton = $("<button>");
        newButton.attr("data-character", disney[i])
        newButton.text(disney[i]);
        $("#character-button").append(newButton);
    }
    

    $("button").on("click", function(){
        var character = $(this).attr("data-character");
        console.log(character);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=VVy1qq3CVz412GDiIaDHXKBkxXzX14kh&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then(function(response){
            console.log(response);
        });
    });
});
