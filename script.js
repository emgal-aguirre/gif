$("#cat-button").on("click", function () {

    //variable for the link of images
    // link to app with key and cat specification
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=h52HIpRsT6Z4JkAK8r479MzpbjcHfdxB&tag=leomessi";

    // call ajax that allows you to make a query of info on the web
    // ajax takes url and get method 
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        //after you look at api- run this dad
        .then(function (response) {

            // saving img to imgeURL
            var imageUrl = response.data.image_original_url;

            // creating and sotring an img tag
            var catImage = $("<img>");

            // image element catIamge and change the souce is the url
            //add an alt attribute 
            catImage.attr("src", imageUrl);
            catImage.attr("alt", "cat image");

            //
            $("#images").prepend(catImage);
        });
});