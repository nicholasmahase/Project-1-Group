$(document).ready(function () {

            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyDVPAHzPuMJJbOl2uK9uXNx2jF41V_bVNE",
                authDomain: "myfullstackproject.firebaseapp.com",
                databaseURL: "https://myfullstackproject.firebaseio.com",
                projectId: "myfullstackproject",
                storageBucket: "myfullstackproject.appspot.com",
                messagingSenderId: "324837953357"
            };
            firebase.initializeApp(config);

            // Create a variable to reference the database
            var database = firebase.database();

            // Search function

            $("button").on("click", function () {
                    var searchTerm = $(this).attr("btn btn-outline-success my-2 my-sm-0");
                    var limit = 10;
                    var price = "";
                    var categories = "halal"
                    var location=""
                    var rating = ""
                    var queryURL = "https://api.yelp.com/v3/businesses/search=" + categories + searchTerm + "&limit=" + limit + "&price=" + price + location + rating + "&api_key=sQz0W1xApsQiW8nhGFTVFFEuOYci9WfuCtYGhnGdGDNhMuA5PvtdJLXWNQZhEDkNumudP6z8jXf0ErBdHOlrV7v8dYgisvk2fwJEJtTLDqApA_8ldmybzIsz61XzW3Yx";

                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).done(function (response) {

                        for(var i = 0; i < limit; i++) { 
                            
                        }

                            });
                    });




            });