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

            // snapshot of data to send to firebase
            $("#searchHalal").on("click", function(event){
                event.preventDefault();

                    //Inital Value
            var searchedFood = $("#search_form").val().trim();

            console.log(searchedFood);

            database.ref("searchFormInfo").push({
                searchedFood: searchedFood
            });

            /* database.ref("searchFormInfo").once("child_added",function(childSnapshot) {
                var thankYouMessage = "<h2>" + "Thank you " + childSnapshot.val().firstName + " " + childSnapshot.val().lastName + " for your feedback." + "</h2>";  
                $('#thankYouMessage').append(thankYouMessage);
            }); */

        });
            // Search function

            $("button").on("click", function () {
                    var searchTerm = $(this).attr("#search_form");
                    var limit = 10;
                    var price = "";
                    var categories = "halal";
                    var location="";
                    var rating = "";
                    var yelpAPI = "&api_key=sQz0W1xApsQiW8nhGFTVFFEuOYci9WfuCtYGhnGdGDNhMuA5PvtdJLXWNQZhEDkNumudP6z8jXf0ErBdHOlrV7v8dYgisvk2fwJEJtTLDqApA_8ldmybzIsz61XzW3Yx";
                    var queryURL = "https://api.yelp.com/v3/businesses/search=" + categories + searchTerm + "&limit=" + limit + "&price=" + price + location + rating + yelpAPI;

                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).done(function (response) {

                        for (var i = 0; i < response.businesses.length; i++) {
                            //var title = (response.businesses[i].title);
                            //var rating = (response.businesses[i].rating);
                            console.log(response.businesses[i]);
                          }

                            });
                    });




            });
