      // Initial array of gifs
      // var gifs = ["Will Smith", "Mr. Bean", "Adam Sandler", "Kevin Hart"];

      // displaygifInfo function re-renders the HTML to display the appropriate content

      function displaygifInfo() {

        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=gpAVPx2kVKoCbUtMgxvIBO0ulIgvD1p2&tag=movies&limit=12";


        // Creates AJAX call for the specific gif button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function (response) {
          $('.gif-container').empty();
          for (var i = 0; i < response.data.length; i++) {
            var title = "<div class='title'> Title:  " + (response.data[i].title) + " </div>";
            var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
            var image = '<img src= " ' + response.data[i].images.fixed_height_still.url +
              '" data-still=" ' + response.data[i].images.fixed_height_still.url +
              ' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="gifDisplay">'
            var gifItUp = '<div class="col-md-3">' + title + rating + image + '</div>';
            $('.gif-container').append(gifItUp);
            console.log(response.data[i]);
          }

          $('.gifDisplay').on('click', function () {
            var state = $(this).attr('data-state');
            if (state === 'still') {
              $(this).attr('src', $(this).attr("data-animate"));
              $(this).attr('data-state', 'animate');
            } else {
              $(this).attr('src', $(this).attr("data-still"));
              $(this).attr('data-state', 'still');
            }

          });
        })
      }



      // Function for displaying gif data
      function renderButtons() {

        // Deletes the gifs prior to adding new gifs
        // (this is necessary otherwise you will have repeat buttons)
        $(".buttons-view").empty();


        // Loops through the array of gifs
        for (var i = 0; i < gifs.length; i++) {

          // Then dynamicaly generates buttons for each gif in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of gif to our button
          a.addClass("gif");
          // Added a data-attribute
          a.attr("data-name", gifs[i]);
          // Provided the initial button text
          a.text(gifs[i]);
          // Added the button to the buttons-view div
          $(".buttons-view").prepend(a);

        }
      }


      // This function handles events where the add gif button is clicked
      $(".add-gif").on("click", function (event) {
        event.preventDefault();

        // This line of code will grab the input from the textbox
        var gif = $(".gif-input").val().trim();

        // The gif from the textbox is then added to our array
        gifs.push(gif);

        // Calling renderButtons which handles the processing of our gif array
        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "gif"
      $(document).on("click", ".gif", displaygifInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

      