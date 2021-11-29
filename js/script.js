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



})















