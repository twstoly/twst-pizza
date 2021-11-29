function pizzaSizes(small,medium,large){
    this.small = small;
    this. medium = medium;
    this.large = large;
}
function pizzaCrusts(stuffed,crispy,gluten){
    this.stuffed = stuffed;
    this.crispy = crispy;
    this.gluten = gluten;
}

function pizzaToppings(pepperoni,mushroom,sausage){
    this.pepperoni = pepperoni;
    this.mushroom = mushroom;
    this.sausage = sausage;
}
function pizzaSizesTwo(smallTwo,mediumTwo,largeTwo){
    this.smallTwo = smallTwo;
    this. mediumTwo = mediumTwo;
    this.largeTwo = largeTwo;
}
function pizzaCrustsTwo(stuffedTwo,crispyTwo,glutenTwo){
    this.stuffedTwo = stuffedTwo;
    this.crispyTwo = crispyTwo;
    this.glutenTwo = glutenTwo;
}

function pizzaToppingsTwo(pepperoniTwo,mushroomTwo,sausageTwo){
    this.pepperoniTwo = pepperoniTwo;
    this.mushroomTwo = mushroomTwo;
    this.sausageTwo = sausageTwo;
}


// User Interface
$(document).ready(function(){
    // Pizza Peperoni
    $("form#pizza-peperoni").submit(function(event){
        event.preventDefault();

        var smallRadio = $("input#small[name='pizzaSizes']:checked").val();
        var mediumRadio = $("input#mediumRadio[name='pizzaSizes']:checked").val();
        var largeRadio = $("input#largeRadio[name='pizzaSizes']:checked").val();
        // new Size
        var size = new pizzaSizes(smallRadio,mediumRadio,largeRadio);

        var stuffedRadio = $("input#stuffed[name='pizzaCrusts']:checked").val();
        var crispyradio = $("input#crispy[name='pizzaCrusts']:checked").val();
        var glutenRadio = $("input#gluten[name='pizzaCrusts']:checked").val();
        // new Crusts
        var crusts  = new pizzaCrusts(stuffedRadio,crispyradio,glutenRadio)

        var pepperoniRadio = $("input#pepperoni[name='pizzaToppings']:checked").val();
        var mushroomRadio = $("input#mushroom[name='pizzaToppings']:checked").val();
        var sausageradio = $("input#sausage[name='pizzaToppings']:checked").val();
        // new Toppings
        var toppings  = new pizzaToppings(pepperoniRadio,mushroomRadio,sausageradio)

        // Small section radio.
        if(smallRadio == undefined && stuffedRadio == undefined && pepperoniRadio == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadio && stuffedRadio && pepperoniRadio){
            var  value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
             alert("The total amounts to: " + value)
        }else if(smallRadio && crispyradio && pepperoniRadio){
            var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && glutenRadio && pepperoniRadio){
            var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && stuffedRadio && mushroomRadio){
            var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && crispyradio && mushroomRadio){
            var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && glutenRadio && mushroomRadio){
            var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && stuffedRadio && sausageradio){
            var value = parseInt(smallRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && crispyradio && sausageradio){
            var value = parseInt(smallRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(smallRadio && glutenRadio && sausageradio){
            var value = parseInt(smallRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadio && stuffedRadio && pepperoniRadio){
            var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && crispyradio && pepperoniRadio){
            var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && glutenRadio && pepperoniRadio){
            var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && stuffedRadio && mushroomRadio){
            var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && crispyradio && mushroomRadio){
            var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && glutenRadio && mushroomRadio){
            var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && stuffedRadio && sausageradio){
            var value = parseInt(mediumRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && crispyradio && sausageradio){
            var value = parseInt(mediumRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(mediumRadio && glutenRadio && sausageradio){
            var value = parseInt(mediumRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadio && stuffedRadio && pepperoniRadio){
            var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && crispyradio && pepperoniRadio){
            var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && glutenRadio && pepperoniRadio){
            var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(pepperoniRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && stuffedRadio && mushroomRadio){
            var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && crispyradio && mushroomRadio){
            var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && glutenRadio && mushroomRadio){
            var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(mushroomRadio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && stuffedRadio && sausageradio){
            var value = parseInt(largeRadio) + parseInt(stuffedRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && crispyradio && sausageradio){
            var value = parseInt(largeRadio) + parseInt(crispyradio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }else if(largeRadio && glutenRadio && sausageradio){
            var value = parseInt(largeRadio) + parseInt(glutenRadio) + parseInt(sausageradio) 
            alert("The total amounts to: " + value)
        }
    })


    // pizza NeaPolitan pizza

    $("form#neapolitanPizza").submit(function(event){
        event.preventDefault();

        var smallRadioTwo = $("input#smallTwo[name='pizzaSizesTwo']:checked").val();
        var mediumRadioTwo = $("input#mediumTwo[name='pizzaSizesTwo']:checked").val();
        var largeRadioTwo = $("input#largeTwo[name='pizzaSizesTwo']:checked").val();

        // new Size  
        // var sizeTwo = new pizzaSizesTwo(smallRadioTwo,mediumRadioTwo,largeRadioTwo);

        var stuffedRadioTwo = $("input#stuffedTwo[name='pizzaCrustsTwo']:checked").val();
        var crispyRadioTwo = $("input#crispyTwo[name='pizzaCrustsTwo']:checked").val();
        var gluttenradioTwo = $("input#glutenTwo[name='pizzaCrustsTwo']:checked").val();
        
        // new Crusts
        // var crustsTwo  = new pizzaCrustsTwo(stuffedRadioTwo,crispyRadioTwo,gluttenRadioTwo)

        var pepperoniRadioTwo = $("input#pepperoniTwo[name='pizzaToppingsTwo']:checked").val();
        var mushroomRadioTwo = $("input#mushroomTwo[name='pizzaToppingsTwo']:checked").val();
        var sausageradioTwo = $("input#sausageTwo[name='pizzaToppingsTwo']:checked").val();
        // new Toppings
        // var toppingsTwo  = new pizzaToppingsTwo(pepperoniRadioTwo,mushroomRadioTwo,sausageRadioTwo)

        // Small section radio.
        if(smallRadioTwo == undefined && stuffedRadioTwo == undefined && pepperoniRadioTwo == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadioTwo && stuffedRadioTwo && pepperoniRadioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && crispyRadioTwo && pepperoniRadioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(crispyRadioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && gluttenradioTwo && pepperoniRadioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(gluttenradioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && stuffedRadioTwo && mushroomRadioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && crispyRadioTwo && mushroomRadioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(crispyRadioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && gluttenradioTwo && mushroomRadioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(gluttenradioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && stuffedRadioTwo && sausageradioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && crispyRadioTwo && sausageradioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(crispyRadioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }else if(smallRadioTwo && gluttenradioTwo && sausageradioTwo){
            var value = parseInt(smallRadioTwo) + parseInt(gluttenradioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioTwo && stuffedRadioTwo && pepperoniRadioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && crispyRadioTwo && pepperoniRadioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(crispyRadioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && gluttenradioTwo && pepperoniRadioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(gluttenradioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && stuffedRadioTwo && mushroomRadioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && crispyRadioTwo && mushroomRadioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(crispyRadioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && gluttenradioTwo && mushroomRadioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(gluttenradioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && stuffedRadioTwo && sausageradioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && crispyRadioTwo && sausageradioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(crispyRadioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioTwo && gluttenradioTwo && sausageradioTwo){
            var value = parseInt(mediumRadioTwo) + parseInt(gluttenradioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioTwo && stuffedRadioTwo && pepperoniRadioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && crispyRadioTwo && pepperoniRadioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(crispyRadioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && gluttenradioTwo && pepperoniRadioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(gluttenradioTwo) + parseInt(pepperoniRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && stuffedRadioTwo && mushroomRadioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && crispyRadioTwo && mushroomRadioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(crispyRadioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && gluttenradioTwo && mushroomRadioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(gluttenradioTwo) + parseInt(mushroomRadioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && stuffedRadioTwo && sausageradioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(stuffedRadioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && crispyRadioTwo && sausageradioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(crispyRadioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }else if(largeRadioTwo && gluttenradioTwo && sausageradioTwo){
            var value = parseInt(largeRadioTwo) + parseInt(gluttenradioTwo) + parseInt(sausageradioTwo) 
            alert("The total amounts to: " + value)
        }
    })


    //Sicilian
    $("form#sicilian").submit(function(event){
        event.preventDefault();

        var smallRadioThree = $("input#smallThree[name='pizzaSizesThree']:checked").val();
        var mediumRadioThree = $("input#mediumThree[name='pizzaSizesThree']:checked").val();
        var largeRadioThree = $("input#largeThree[name='pizzaSizesThree']:checked").val();
        

        // new Size  
        // var sizeTwo = new pizzaSizesTwo(smallRadioThree,mediumRadioThree,largeRadioThree);

        var stuffedRadioThree = $("input#stuffedThree[name='pizzaCrustsThree']:checked").val();
        var crispyRadioThree = $("input#crispyThree[name='pizzaCrustsThree']:checked").val();
        var gluttenradioThree = $("input#glutenThree[name='pizzaCrustsThree']:checked").val();
        
        // new Crusts
        // var crustsTwo  = new pizzaCrustsTwo(stuffedRadioThree,crispyRadioThree,gluttenRadioThree)

        var pepperoniRadioThree = $("input#pepperoniThree[name='pizzaToppingsThree']:checked").val();
        var mushroomRadioThree = $("input#mushroomThree[name='pizzaToppingsThree']:checked").val();
        var sausageradioThree = $("input#sausageThree[name='pizzaToppingsThree']:checked").val();
        // new Toppings
        // var toppingsTwo  = new pizzaToppingsTwo(pepperoniRadioThree,mushroomRadioThree,sausageRadioThree)

        // Small section radio.
        if(smallRadioThree == undefined && stuffedRadioThree == undefined && pepperoniRadioThree == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadioThree && stuffedRadioThree && pepperoniRadioThree){
            var value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && crispyRadioThree && pepperoniRadioThree){
            var value = parseInt(smallRadioThree) + parseInt(crispyRadioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && gluttenradioThree && pepperoniRadioThree){
            var value = parseInt(smallRadioThree) + parseInt(gluttenradioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && stuffedRadioThree && mushroomRadioThree){
            var value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && crispyRadioThree && mushroomRadioThree){
            var value = parseInt(smallRadioThree) + parseInt(crispyRadioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && gluttenradioThree && mushroomRadioThree){
            var value = parseInt(smallRadioThree) + parseInt(gluttenradioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && stuffedRadioThree && sausageradioThree){
            var value = parseInt(smallRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && crispyRadioThree && sausageradioThree){
            var value = parseInt(smallRadioThree) + parseInt(crispyRadioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }else if(smallRadioThree && gluttenradioThree && sausageradioThree){
            var value = parseInt(smallRadioThree) + parseInt(gluttenradioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioThree && stuffedRadioThree && pepperoniRadioThree){
            var value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && crispyRadioThree && pepperoniRadioThree){
            var value = parseInt(mediumRadioThree) + parseInt(crispyRadioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && gluttenradioThree && pepperoniRadioThree){
            var value = parseInt(mediumRadioThree) + parseInt(gluttenradioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && stuffedRadioThree && mushroomRadioThree){
            var value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && crispyRadioThree && mushroomRadioThree){
            var value = parseInt(mediumRadioThree) + parseInt(crispyRadioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && gluttenradioThree && mushroomRadioThree){
            var value = parseInt(mediumRadioThree) + parseInt(gluttenradioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && stuffedRadioThree && sausageradioThree){
            var value = parseInt(mediumRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && crispyRadioThree && sausageradioThree){
            var value = parseInt(mediumRadioThree) + parseInt(crispyRadioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioThree && gluttenradioThree && sausageradioThree){
            var value = parseInt(mediumRadioThree) + parseInt(gluttenradioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioThree && stuffedRadioThree && pepperoniRadioThree){
            var value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && crispyRadioThree && pepperoniRadioThree){
            var value = parseInt(largeRadioThree) + parseInt(crispyRadioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && gluttenradioThree && pepperoniRadioThree){
            var value = parseInt(largeRadioThree) + parseInt(gluttenradioThree) + parseInt(pepperoniRadioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && stuffedRadioThree && mushroomRadioThree){
            var value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && crispyRadioThree && mushroomRadioThree){
            var value = parseInt(largeRadioThree) + parseInt(crispyRadioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && gluttenradioThree && mushroomRadioThree){
            var value = parseInt(largeRadioThree) + parseInt(gluttenradioThree) + parseInt(mushroomRadioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && stuffedRadioThree && sausageradioThree){
            var value = parseInt(largeRadioThree) + parseInt(stuffedRadioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && crispyRadioThree && sausageradioThree){
            var value = parseInt(largeRadioThree) + parseInt(crispyRadioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }else if(largeRadioThree && gluttenradioThree && sausageradioThree){
            var value = parseInt(largeRadioThree) + parseInt(gluttenradioThree) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }
    })


    //margherita
    $("form#margherita").submit(function(event){
        event.preventDefault();

        var smallRadioEight = $("input#smallFour[name='pizzaSizesFour']:checked").val();
        var mediumRadioFour = $("input#mediumFour[name='pizzaSizesFour']:checked").val();
        var largeRadioFour  = $("input#largeFour[name='pizzaSizesFour']:checked").val();
        

        // new Size  
        // var sizeTwo = new pizzaSizesTwo(smallRadioFour,mediumRadioFour,largeRadioFour);

        var stuffedRadioFour = $("input#stuffedFour[name='pizzaCrustsFour']:checked").val();
        var crispyRadioFour = $("input#crispyFour[name='pizzaCrustsFour']:checked").val();
        var gluttenradioFour = $("input#glutenFour[name='pizzaCrustsFour']:checked").val();
        
        // new Crusts
        // var crustsTwo  = new pizzaCrustsTwo(stuffedRadioFour,crispyRadioFour,gluttenRadioFour)

        var pepperoniRadioFour = $("input#pepperoniFour[name='pizzaToppingsFour']:checked").val();
        var mushroomRadioFour = $("input#mushroomFour[name='pizzaToppingsFour']:checked").val();
        var sausageradioFour = $("input#sausageFour[name='pizzaToppingsFour']:checked").val();
        // new Toppings
        // var toppingsTwo  = new pizzaToppingsTwo(pepperoniRadioFour,mushroomRadioFour,sausageRadioFour)
        

        // Small section radio.
        if(smallRadioFour == undefined && stuffedRadioFour == undefined && pepperoniRadioFour == undefined){
            
            alert("Make sure you select all fields");
        }
        else if(smallRadioFour && stuffedRadioFour && pepperoniRadioFour){
            var value = parseInt(smallRadioFour) + parseInt(stuffedRadioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && crispyRadioFour && pepperoniRadioFour){
            var value = parseInt(smallRadioFour) + parseInt(crispyRadioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && gluttenradioFour && pepperoniRadioFour){
            var value = parseInt(smallRadioFour) + parseInt(gluttenradioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && stuffedRadioFour && mushroomRadioFour){
            var value = parseInt(smallRadioFour) + parseInt(stuffedRadioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && crispyRadioFour && mushroomRadioFour){
            var value = parseInt(smallRadioFour) + parseInt(crispyRadioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && gluttenradioFour && mushroomRadioFour){
            var value = parseInt(smallRadioFour) + parseInt(gluttenradioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && stuffedRadioFour && sausageradioFour){
            var value = parseInt(smallRadioFour) + parseInt(stuffedRadioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && crispyRadioFour && sausageradioFour){
            var value = parseInt(smallRadioFour) + parseInt(crispyRadioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFour && gluttenradioFour && sausageradioFour){
            var value = parseInt(smallRadioFour) + parseInt(gluttenradioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioFour && stuffedRadioFour && pepperoniRadioFour){
            var value = parseInt(mediumRadioFour) + parseInt(stuffedRadioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && crispyRadioFour && pepperoniRadioFour){
            var value = parseInt(mediumRadioFour) + parseInt(crispyRadioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && gluttenradioFour && pepperoniRadioFour){
            var value = parseInt(mediumRadioFour) + parseInt(gluttenradioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && stuffedRadioFour && mushroomRadioFour){
            var value = parseInt(mediumRadioFour) + parseInt(stuffedRadioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && crispyRadioFour && mushroomRadioFour){
            var value = parseInt(mediumRadioFour) + parseInt(crispyRadioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && gluttenradioFour && mushroomRadioFour){
            var value = parseInt(mediumRadioFour) + parseInt(gluttenradioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && stuffedRadioFour && sausageradioFour){
            var value = parseInt(mediumRadioFour) + parseInt(stuffedRadioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && crispyRadioFour && sausageradioFour){
            var value = parseInt(mediumRadioFour) + parseInt(crispyRadioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFour && gluttenradioFour && sausageradioFour){
            var value = parseInt(mediumRadioFour) + parseInt(gluttenradioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioFour && stuffedRadioFour && pepperoniRadioFour){
            var value = parseInt(largeRadioFour) + parseInt(stuffedRadioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && crispyRadioFour && pepperoniRadioFour){
            var value = parseInt(largeRadioFour) + parseInt(crispyRadioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && gluttenradioFour && pepperoniRadioFour){
            var value = parseInt(largeRadioFour) + parseInt(gluttenradioFour) + parseInt(pepperoniRadioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && stuffedRadioFour && mushroomRadioFour){
            var value = parseInt(largeRadioFour) + parseInt(stuffedRadioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && crispyRadioFour && mushroomRadioFour){
            var value = parseInt(largeRadioFour) + parseInt(crispyRadioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && gluttenradioFour && mushroomRadioFour){
            var value = parseInt(largeRadioFour) + parseInt(gluttenradioFour) + parseInt(mushroomRadioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && stuffedRadioFour && sausageradioFour){
            var value = parseInt(largeRadioFour) + parseInt(stuffedRadioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && crispyRadioFour && sausageradioFour){
            var value = parseInt(largeRadioFour) + parseInt(crispyRadioFour) + parseInt(sausageradioFour) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFour && gluttenradioFour && sausageradioFour){
            var value = parseInt(largeRadioFour) + parseInt(gluttenradioFour) + parseInt(sausageradioThree) 
            alert("The total amounts to: " + value)
        }
    })

    // Hawaiian
    $("form#hawaiian").submit(function(event){
        event.preventDefault();

        var smallRadioFive = $("input#smallFive[name='pizzaSizesFive']:checked").val();
        var mediumRadioFive = $("input#mediumFive[name='pizzaSizesFive']:checked").val();
        var largeRadioFive = $("input#largeFive[name='pizzaSizesFive']:checked").val();
        // new Size  
        // var sizeFive = new pizzaSizesFive(smallRadioFive,mediumRadioFive,largeRadioFive);

        var stuffedRadioFive = $("input#stuffedFive[name='pizzaCrustsFive']:checked").val();
        var crispyRadioFive = $("input#crispyFive[name='pizzaCrustsFive']:checked").val();
        var gluttenradioFive = $("input#glutenFive[name='pizzaCrustsFive']:checked").val();
        
        // new Crusts
        // var crustsFive  = new pizzaCrustsFive(stuffedRadioFive,crispyRadioFive,gluttenRadioFive)

        var pepperoniRadioFive = $("input#pepperoniFive[name='pizzaToppingsFive']:checked").val();
        var mushroomRadioFive = $("input#mushroomFive[name='pizzaToppingsFive']:checked").val();
        var sausageradioFive = $("input#sausageFive[name='pizzaToppingsFive']:checked").val();
        // new Toppings
        // var toppingsFive  = new pizzaToppingsFive(pepperoniRadioFive,mushroomRadioFive,sausageRadioFive)

        // Small section radio.
        if(smallRadioFive == undefined && stuffedRadioFive == undefined && pepperoniRadioFive == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadioFive && stuffedRadioFive && pepperoniRadioFive){
            var value = parseInt(smallRadioFive) + parseInt(stuffedRadioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && crispyRadioFive && pepperoniRadioFive){
            var value = parseInt(smallRadioFive) + parseInt(crispyRadioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && gluttenradioFive && pepperoniRadioFive){
            var value = parseInt(smallRadioFive) + parseInt(gluttenradioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && stuffedRadioFive && mushroomRadioFive){
            var value = parseInt(smallRadioFive) + parseInt(stuffedRadioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && crispyRadioFive && mushroomRadioFive){
            var value = parseInt(smallRadioFive) + parseInt(crispyRadioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && gluttenradioFive && mushroomRadioFive){
            var value = parseInt(smallRadioFive) + parseInt(gluttenradioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && stuffedRadioFive && sausageradioFive){
            var value = parseInt(smallRadioFive) + parseInt(stuffedRadioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && crispyRadioFive && sausageradioFive){
            var value = parseInt(smallRadioFive) + parseInt(crispyRadioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }else if(smallRadioFive && gluttenradioFive && sausageradioFive){
            var value = parseInt(smallRadioFive) + parseInt(gluttenradioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioFive && stuffedRadioFive && pepperoniRadioFive){
            var value = parseInt(mediumRadioFive) + parseInt(stuffedRadioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && crispyRadioFive && pepperoniRadioFive){
            var value = parseInt(mediumRadioFive) + parseInt(crispyRadioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && gluttenradioFive && pepperoniRadioFive){
            var value = parseInt(mediumRadioFive) + parseInt(gluttenradioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && stuffedRadioFive && mushroomRadioFive){
            var value = parseInt(mediumRadioFive) + parseInt(stuffedRadioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && crispyRadioFive && mushroomRadioFive){
            var value = parseInt(mediumRadioFive) + parseInt(crispyRadioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && gluttenradioFive && mushroomRadioFive){
            var value = parseInt(mediumRadioFive) + parseInt(gluttenradioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && stuffedRadioFive && sausageradioFive){
            var value = parseInt(mediumRadioFive) + parseInt(stuffedRadioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && crispyRadioFive && sausageradioFive){
            var value = parseInt(mediumRadioFive) + parseInt(crispyRadioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioFive && gluttenradioFive && sausageradioFive){
            var value = parseInt(mediumRadioFive) + parseInt(gluttenradioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioFive && stuffedRadioFive && pepperoniRadioFive){
            var value = parseInt(largeRadioFive) + parseInt(stuffedRadioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && crispyRadioFive && pepperoniRadioFive){
            var value = parseInt(largeRadioFive) + parseInt(crispyRadioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && gluttenradioFive && pepperoniRadioFive){
            var value = parseInt(largeRadioFive) + parseInt(gluttenradioFive) + parseInt(pepperoniRadioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && stuffedRadioFive && mushroomRadioFive){
            var value = parseInt(largeRadioFive) + parseInt(stuffedRadioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && crispyRadioFive && mushroomRadioFive){
            var value = parseInt(largeRadioFive) + parseInt(crispyRadioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && gluttenradioFive && mushroomRadioFive){
            var value = parseInt(largeRadioFive) + parseInt(gluttenradioFive) + parseInt(mushroomRadioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && stuffedRadioFive && sausageradioFive){
            var value = parseInt(largeRadioFive) + parseInt(stuffedRadioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && crispyRadioFive && sausageradioFive){
            var value = parseInt(largeRadioFive) + parseInt(crispyRadioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }else if(largeRadioFive && gluttenradioFive && sausageradioFive){
            var value = parseInt(largeRadioFive) + parseInt(gluttenradioFive) + parseInt(sausageradioFive) 
            alert("The total amounts to: " + value)
        }
    })


    //meatpizza

    $("form#meatPizza").submit(function(event){
        event.preventDefault();

        var smallRadioSix = $("input#smallSix[name='pizzaSizesSix']:checked").val();
        var mediumRadioSix = $("input#mediumSix[name='pizzaSizesSix']:checked").val();
        var largeRadioSix = $("input#largeSix[name='pizzaSizesSix']:checked").val();

        // new Size  
        // var sizeSix = new pizzaSizesSix(smallRadioSix,mediumRadioSix,largeRadioSix);

        var stuffedRadioSix = $("input#stuffedSix[name='pizzaCrustsSix']:checked").val();
        var crispyRadioSix = $("input#crispySix[name='pizzaCrustsSix']:checked").val();
        var gluttenradioSix = $("input#glutenSix[name='pizzaCrustsSix']:checked").val();
        
        // new Crusts
        // var crustsSix  = new pizzaCrustsSix(stuffedRadioSix,crispyRadioSix,gluttenRadioSix)

        var pepperoniRadioSix = $("input#pepperoniSix[name='pizzaToppingsSix']:checked").val();
        var mushroomRadioSix = $("input#mushroomSix[name='pizzaToppingsSix']:checked").val();
        var sausageradioSix = $("input#sausageSix[name='pizzaToppingsSix']:checked").val();
        // new Toppings
        // var toppingsSix  = new pizzaToppingsSix(pepperoniRadioSix,mushroomRadioSix,sausageRadioSix)

        // Small section radio.
        if(smallRadioSix == undefined && stuffedRadioSix == undefined && pepperoniRadioSix == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadioSix && stuffedRadioSix && pepperoniRadioSix){
            var value = parseInt(smallRadioSix) + parseInt(stuffedRadioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && crispyRadioSix && pepperoniRadioSix){
            var value = parseInt(smallRadioSix) + parseInt(crispyRadioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && gluttenradioSix && pepperoniRadioSix){
            var value = parseInt(smallRadioSix) + parseInt(gluttenradioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && stuffedRadioSix && mushroomRadioSix){
            var value = parseInt(smallRadioSix) + parseInt(stuffedRadioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && crispyRadioSix && mushroomRadioSix){
            var value = parseInt(smallRadioSix) + parseInt(crispyRadioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && gluttenradioSix && mushroomRadioSix){
            var value = parseInt(smallRadioSix) + parseInt(gluttenradioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && stuffedRadioSix && sausageradioSix){
            var value = parseInt(smallRadioSix) + parseInt(stuffedRadioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && crispyRadioSix && sausageradioSix){
            var value = parseInt(smallRadioSix) + parseInt(crispyRadioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSix && gluttenradioSix && sausageradioSix){
            var value = parseInt(smallRadioSix) + parseInt(gluttenradioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioSix && stuffedRadioSix && pepperoniRadioSix){
            var value = parseInt(mediumRadioSix) + parseInt(stuffedRadioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && crispyRadioSix && pepperoniRadioSix){
            var value = parseInt(mediumRadioSix) + parseInt(crispyRadioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && gluttenradioSix && pepperoniRadioSix){
            var value = parseInt(mediumRadioSix) + parseInt(gluttenradioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && stuffedRadioSix && mushroomRadioSix){
            var value = parseInt(mediumRadioSix) + parseInt(stuffedRadioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && crispyRadioSix && mushroomRadioSix){
            var value = parseInt(mediumRadioSix) + parseInt(crispyRadioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && gluttenradioSix && mushroomRadioSix){
            var value = parseInt(mediumRadioSix) + parseInt(gluttenradioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && stuffedRadioSix && sausageradioSix){
            var value = parseInt(mediumRadioSix) + parseInt(stuffedRadioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && crispyRadioSix && sausageradioSix){
            var value = parseInt(mediumRadioSix) + parseInt(crispyRadioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSix && gluttenradioSix && sausageradioSix){
            var value = parseInt(mediumRadioSix) + parseInt(gluttenradioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioSix && stuffedRadioSix && pepperoniRadioSix){
            var value = parseInt(largeRadioSix) + parseInt(stuffedRadioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && crispyRadioSix && pepperoniRadioSix){
            var value = parseInt(largeRadioSix) + parseInt(crispyRadioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && gluttenradioSix && pepperoniRadioSix){
            var value = parseInt(largeRadioSix) + parseInt(gluttenradioSix) + parseInt(pepperoniRadioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && stuffedRadioSix && mushroomRadioSix){
            var value = parseInt(largeRadioSix) + parseInt(stuffedRadioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && crispyRadioSix && mushroomRadioSix){
            var value = parseInt(largeRadioSix) + parseInt(crispyRadioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && gluttenradioSix && mushroomRadioSix){
            var value = parseInt(largeRadioSix) + parseInt(gluttenradioSix) + parseInt(mushroomRadioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && stuffedRadioSix && sausageradioSix){
            var value = parseInt(largeRadioSix) + parseInt(stuffedRadioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && crispyRadioSix && sausageradioSix){
            var value = parseInt(largeRadioSix) + parseInt(crispyRadioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSix && gluttenradioSix && sausageradioSix){
            var value = parseInt(largeRadioSix) + parseInt(gluttenradioSix) + parseInt(sausageradioSix) 
            alert("The total amounts to: " + value)
        }
    })


    //veggiePizza
    $("form#veggiePizza").submit(function(event){
        event.preventDefault();

        var smallRadioSeven = $("input#smallSeven[name='pizzaSizesSeven']:checked").val();
        var mediumRadioSeven = $("input#mediumSeven[name='pizzaSizesSeven']:checked").val();
        var largeRadioSeven = $("input#largeSeven[name='pizzaSizesSeven']:checked").val();
        

        // new Size  
        // var sizeTwo = new pizzaSizesTwo(smallRadioSeven,mediumRadioSeven,largeRadioSeven);

        var stuffedRadioSeven = $("input#stuffedSeven[name='pizzaCrustsSeven']:checked").val();
        var crispyRadioSeven = $("input#crispySeven[name='pizzaCrustsSeven']:checked").val();
        var gluttenradioSeven = $("input#glutenSeven[name='pizzaCrustsSeven']:checked").val();
        
        // new Crusts
        // var crustsTwo  = new pizzaCrustsTwo(stuffedRadioSeven,crispyRadioSeven,gluttenRadioSeven)

        var pepperoniRadioSeven = $("input#pepperoniSeven[name='pizzaToppingsSeven']:checked").val();
        var mushroomRadioSeven = $("input#mushroomSeven[name='pizzaToppingsSeven']:checked").val();
        var sausageradioSeven = $("input#sausageSeven[name='pizzaToppingsSeven']:checked").val();
        // new Toppings
        // var toppingsTwo  = new pizzaToppingsTwo(pepperoniRadioSeven,mushroomRadioSeven,sausageRadioSeven)

        // Small section radio.
        if(smallRadioSeven == undefined && stuffedRadioSeven == undefined && pepperoniRadioSeven == undefined){
            alert("Make sure you select all fields")
        }
        else if(smallRadioSeven && stuffedRadioSeven && pepperoniRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && crispyRadioSeven && pepperoniRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(crispyRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && gluttenradioSeven && pepperoniRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(gluttenradioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && stuffedRadioSeven && mushroomRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && crispyRadioSeven && mushroomRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(crispyRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && gluttenradioSeven && mushroomRadioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(gluttenradioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && stuffedRadioSeven && sausageradioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && crispyRadioSeven && sausageradioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(crispyRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(smallRadioSeven && gluttenradioSeven && sausageradioSeven){
            var value = parseInt(smallRadioSeven) + parseInt(gluttenradioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioSeven && stuffedRadioSeven && pepperoniRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && crispyRadioSeven && pepperoniRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(crispyRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && gluttenradioSeven && pepperoniRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(gluttenradioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && stuffedRadioSeven && mushroomRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && crispyRadioSeven && mushroomRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(crispyRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && gluttenradioSeven && mushroomRadioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(gluttenradioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && stuffedRadioSeven && sausageradioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && crispyRadioSeven && sausageradioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(crispyRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioSeven && gluttenradioSeven && sausageradioSeven){
            var value = parseInt(mediumRadioSeven) + parseInt(gluttenradioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioSeven && stuffedRadioSeven && pepperoniRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && crispyRadioSeven && pepperoniRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(crispyRadioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && gluttenradioSeven && pepperoniRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(gluttenradioSeven) + parseInt(pepperoniRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && stuffedRadioSeven && mushroomRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && crispyRadioSeven && mushroomRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(crispyRadioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && gluttenradioSeven && mushroomRadioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(gluttenradioSeven) + parseInt(mushroomRadioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && stuffedRadioSeven && sausageradioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(stuffedRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && crispyRadioSeven && sausageradioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(crispyRadioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }else if(largeRadioSeven && gluttenradioSeven && sausageradioSeven){
            var value = parseInt(largeRadioSeven) + parseInt(gluttenradioSeven) + parseInt(sausageradioSeven) 
            alert("The total amounts to: " + value)
        }
    })


    //margherita
    $("form#cheese").submit(function(event){
        event.preventDefault();

        var smallRadioEight = $("input#smallEight[name='pizzaSizesEight']:checked").val();
        var mediumRadioEight = $("input#mediumEight[name='pizzaSizesEight']:checked").val();
        var largeRadioEight  = $("input#largeEight[name='pizzaSizesEight']:checked").val();
        

        // new Size  
        // var sizeTwo = new pizzaSizesTwo(smallRadioEight,mediumRadioEight,largeRadioEight);

        var stuffedRadioEight = $("input#stuffedEight[name='pizzaCrustsEight']:checked").val();
        var crispyRadioEight = $("input#crispyEight[name='pizzaCrustsEight']:checked").val();
        var gluttenradioEight = $("input#glutenEight[name='pizzaCrustsEight']:checked").val();
        
        // new Crusts
        // var crustsTwo  = new pizzaCrustsTwo(stuffedRadioEight,crispyRadioEight,gluttenRadioEight)

        var pepperoniRadioEight = $("input#pepperoniEight[name='pizzaToppingsEight']:checked").val();
        var mushroomRadioEight = $("input#mushroomEight[name='pizzaToppingsEight']:checked").val();
        var sausageradioEight = $("input#sausageEight[name='pizzaToppingsEight']:checked").val();
        // new Toppings
        // var toppingsTwo  = new pizzaToppingsTwo(pepperoniRadioEight,mushroomRadioEight,sausageRadioEight)
        

        // Small section radio.
        if(smallRadioEight == undefined && stuffedRadioEight == undefined && pepperoniRadioEight == undefined){
            
            alert("Make sure you select all fields");
        }
        else if(smallRadioEight && stuffedRadioEight && pepperoniRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(stuffedRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && crispyRadioEight && pepperoniRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(crispyRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && gluttenradioEight && pepperoniRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(gluttenradioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && stuffedRadioEight && mushroomRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(stuffedRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && crispyRadioEight && mushroomRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(crispyRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && gluttenradioEight && mushroomRadioEight){
            var value = parseInt(smallRadioEight) + parseInt(gluttenradioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && stuffedRadioEight && sausageradioEight){
            var value = parseInt(smallRadioEight) + parseInt(stuffedRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && crispyRadioEight && sausageradioEight){
            var value = parseInt(smallRadioEight) + parseInt(crispyRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(smallRadioEight && gluttenradioEight && sausageradioEight){
            var value = parseInt(smallRadioEight) + parseInt(gluttenradioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }
        // Medium radio section
        else if(mediumRadioEight && stuffedRadioEight && pepperoniRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(stuffedRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && crispyRadioEight && pepperoniRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(crispyRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && gluttenradioEight && pepperoniRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(gluttenradioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && stuffedRadioEight && mushroomRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(stuffedRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && crispyRadioEight && mushroomRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(crispyRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && gluttenradioEight && mushroomRadioEight){
            var value = parseInt(mediumRadioEight) + parseInt(gluttenradioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && stuffedRadioEight && sausageradioEight){
            var value = parseInt(mediumRadioEight) + parseInt(stuffedRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && crispyRadioEight && sausageradioEight){
            var value = parseInt(mediumRadioEight) + parseInt(crispyRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(mediumRadioEight && gluttenradioEight && sausageradioEight){
            var value = parseInt(mediumRadioEight) + parseInt(gluttenradioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }
        // Large radio section
        else if(largeRadioEight && stuffedRadioEight && pepperoniRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(stuffedRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && crispyRadioEight && pepperoniRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(crispyRadioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && gluttenradioEight && pepperoniRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(gluttenradioEight) + parseInt(pepperoniRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && stuffedRadioEight && mushroomRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(stuffedRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && crispyRadioEight && mushroomRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(crispyRadioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && gluttenradioEight && mushroomRadioEight){
            var value = parseInt(largeRadioEight) + parseInt(gluttenradioEight) + parseInt(mushroomRadioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && stuffedRadioEight && sausageradioEight){
            var value = parseInt(largeRadioEight) + parseInt(stuffedRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && crispyRadioEight && sausageradioEight){
            var value = parseInt(largeRadioEight) + parseInt(crispyRadioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }else if(largeRadioEight && gluttenradioEight && sausageradioEight){
            var value = parseInt(largeRadioEight) + parseInt(gluttenradioEight) + parseInt(sausageradioEight) 
            alert("The total amounts to: " + value)
        }
    })
})















