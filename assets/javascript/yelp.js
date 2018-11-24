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

});
    // Search function

    $("button").on("click", function () {
        var searchTerm = $("#search_form").val().trim();
        $.ajax({
            method: 'GET',
            url: 'https://api.yelp.com/v3/businesses/search',
            data: {
                entity_id: 'Toronto',
                entity_type: 'city', 
                term: searchTerm,
                count: 10,
                cuisines: 'halal',
                //sort: 'real_distance'
            }, 
            dataType: 'json',
            async: true,
            
            // This inserts the api key into the HTTP header
            beforeSend: function(xhr){
                xhr.setRequestHeader('user-key', 'sQz0W1xApsQiW8nhGFTVFFEuOYci9WfuCtYGhnGdGDNhMuA5PvtdJLXWNQZhEDkNumudP6z8jXf0ErBdHOlrV7v8dYgisvk2fwJEJtTLDqApA_8ldmybzIsz61XzW3Yx');
            },  
            success: function(response) { 
                var searchResults = "";
                for(var i = 0; i < response.businesses.length; i++) {
                var resResultName = response.businesses[i].restaurant.name;
                var resResultRating = response.businesses[i].restaurant.user_rating.aggregate_rating;
                var resResultLocation = response.businesses[i].restaurant.location.address;
                var resResultCuisine = response.businesses[i].restaurant.cuisines;
                var url = response.businesses[i].restaurant.events_url;

                console.log(response.businesses[i]);
                searchResults += "<tr>";
                searchResults += "<td> <a href= " + url + ">" + resResultName + "</a></td>";
                searchResults += "<td>" + resResultLocation + "</td>";
                searchResults += "<td>" + resResultRating + "</td>";
                searchResults += "<td>" + resResultCuisine + "</td>";
                searchResults += "<td></td>";
                searchResults += "</tr>";
                }
            
            $('.yelpTable').html(searchResults);
            }
        });
    });
});