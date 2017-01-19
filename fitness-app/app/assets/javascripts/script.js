 $( document ).ready(function() {

    $("#searchit").click(function(){
      search = $('.search').val()
      getNutritionInfo(search)
    })

     $(".day").click(function(){
        location.href='/logs/'+this.innerHTML
    })

    getNutritionInfo = function(data) {
    $.ajax({
            url: "https://api.nutritionix.com/v1_1/search/" + search + "?results=0%3A20&cal_min=0&cal_max=50000&appId=5036296a&appKey=1a4056fd3c1dd022eccd7ae2c4427b6d",
            method: 'GET'
        })
        .done(function(data) {
          console.log(data)
          url = "https://api.nutritionix.com/v1_1/search/" + search + "?results=0%3A20&cal_min=0&cal_max=50000&appId=5036296a&appKey=1a4056fd3c1dd022eccd7ae2c4427b6d"
          console.log(url)
          appendResults(data)

        })
    }

    appendResults = function(data) {
      for(i=0;i<20;i++) {
        resultDiv = $('<div></div>');
        results = $('<ul></ul>');
        resultItem1 = $('<li></li>');
        resultItem2 = $('<li></li>');
        resultItem3 = $('<li class="specific"></li>');
        brand_name = data.hits[i].fields.brand_name;
        item_name = data.hits[i].fields.item_name;
        id = data.hits[i].fields.item_id
        resultItem1.text(item_name);
        resultItem2.text(brand_name);
        resultItem3.text(id);
        resultDiv.addClass(id)
        results.append(resultItem1);
        results.append(resultItem2);
        results.append(resultItem3);
        resultDiv.append(results);
        $('body').append(resultDiv)

      }

      $('.specific').click(function(){
        console.log('u idiot')
        // $('.' + this.innerHTML).addClass(this.innterHTML)
        newClass= this.innerHTML

        $.ajax({
        url: "https://api.nutritionix.com/v1_1/item?id="+this.innerHTML + "&appId=5036296a&appKey=1a4056fd3c1dd022eccd7ae2c4427b6d",
        method: 'GET'
        })
        .done(function(data) {
          appendNutrition(data)
          console.log(data.brand_name)
          $('.specific').removeClass('specific')
        })
      })

      }
        appendNutrition = function(data){

          resultItem3 = $('<li></li>');
          calories = data.nf_calories;
          caloriesFromFat = data.nf_calories_from_fat;
          protein = data.nf_protein;
          saturatedFat = data.nf_saturated_fat;
          servingSize = data.nf_serving_size_qty;
          servingUnit = data.nf_serving_size_unit;
          sodium = data.nf_sodium;
          name = data.brand_name;
          itemName = data.item_name;
          sugar = data.nf_sugars;
          carbs = data.nf_total_carbohydrate;
          fat = data.nf_total_fat;
          date = $('.date').text();

          form = $('<form action="/logs" method="POST"></form')

          labelDate = $('<label></label>');
          labelDate.text('Date: ');
          inputDate = $("<input name=\"date\" value=\""+ date +"\"></input>")
          labelDate.append(inputDate)
          form.append(labelDate)


          form.append('<br>')
          labelBrandName = $('<label></label>');
          labelBrandName.text('Brand: ');
          inputBrandName = $("<input name=\"brand\" value=\""+ name +"\"></input>")
          labelBrandName.append(inputBrandName)
          form.append(labelBrandName)


          form.append('<br>')

          labelItemName = $('<label></label>');
          labelItemName.text('Item: ');
          inputItemName = $("<input name=\"name\" value=\""+ itemName +"\"></input>")
          labelItemName.append(inputItemName)
          form.append(labelItemName)

          form.append('<br>')

          labelServing = $('<label></label>');
          labelServing.text('Serving Size: ');
          inputServing = $('<input value='+ servingSize +'> '+servingUnit+'</input>')
          labelServing.append(inputServing)
          form.append(labelServing)

          form.append('<br>')

          labelCalories = $('<label></label>');
          labelCalories.text('Calories: ');
          inputCalories = $('<input name="calories" class="calories" value='+ calories + '></input>')
          labelCalories.append(inputCalories)
          form.append(labelCalories)

          form.append('<br>')

          labelCaloriesFromFat = $('<label></label>');
          labelCaloriesFromFat.text('Calories from fat: ');
          inputCaloriesFromFat = $('<input name="cal_from_fat" class="caloriesFromFat" value='+ caloriesFromFat + '></input>')
          labelCaloriesFromFat.append(inputCaloriesFromFat)
          form.append(labelCaloriesFromFat)

          form.append('<br>')

          labelProtein = $('<label></label>');
          labelProtein.text('Protein: ');
          inputProtein = $('<input name="protein" class="protein" value='+ protein +'> grams</input>')
          labelProtein.append(inputProtein)
          form.append(labelProtein)

          form.append('<br>')

          labelFat = $('<label></label>');
          labelFat.text('Total Fat: ');
          inputFat = $('<input name="fat" class="fat" value='+ fat  + '> grams</input>')
          labelFat.append(inputFat)
          form.append(labelFat)

          form.append('<br>')

          labelSaturatedFat = $('<label></label>');
          labelSaturatedFat.text('Saturated Fat: ');
          inputSaturatedFat = $('<input name="sat_fat" class="saturatedFat" value='+ saturatedFat +'> grams</input>')
          labelSaturatedFat.append(inputSaturatedFat)
          form.append(labelSaturatedFat)

          form.append('<br>')

          labelSodium = $('<label></label>');
          labelSodium.text('Sodium: ');
          inputSodium = $('<input name="sodium" class="sodium" value='+ sodium + '> grams</input>')
          labelSodium.append(inputSodium)
          form.append(labelSodium)

          form.append('<br>')

          labelSugar = $('<label></label>');
          labelSugar.text('Sugar: ');
          inputSugar = $('<input name="sugar" class="sugar" value='+ sugar + '> grams</input>')
          labelSugar.append(inputSugar)
          form.append(labelSugar)

          form.append('<br>')

          labelCarbs = $('<label></label>');
          labelCarbs.text('Carbohydrates: ');
          inputCarbs = $('<input name="carbs" class="carbs" value='+ carbs + '> grams</input>')
          labelCarbs.append(inputCarbs)
          form.append(labelCarbs)

          form.append('<br>')

          labelServings = $('<label></label>');
          labelServings.text('Number of Servings: ');
          inputServing = $('<select name="servings"></select>');
          inputOption = $('<option>1</option>');
          inputOption2 = $('<option>2</option>');
          inputOption3 = $('<option>3</option>');
          inputOption4 = $('<option>4</option>');
          inputOption5 = $('<option>5</option>');
          inputOption6 = $('<option>6</option>');
          inputOption7 = $('<option>7</option>');
          inputOption8 = $('<option>8</option>');
          inputOption9 = $('<option>9</option>');
          inputOption10 = $('<option>10</option>');
          inputServing.append(inputOption);
          inputServing.append(inputOption2);
          inputServing.append(inputOption3);
          inputServing.append(inputOption4);
          inputServing.append(inputOption5);
          inputServing.append(inputOption6);
          inputServing.append(inputOption7);
          inputServing.append(inputOption8);
          inputServing.append(inputOption9);
          inputServing.append(inputOption10);
          labelServings.append(inputServing);
          form.append(labelServings);


          labelMeal = $('<label></label>');
          labelMeal.text('Add to Meal: ');
          inputMeal = $('<select name="meal"></select>');
          inputBreakfast = $('<option>Breakfast</option>');
          inputLunch = $('<option>Lunch</option>');
          inputDinner = $('<option>Dinner</option>');
          inputSnack = $('<option>Snack</option>');
          inputMeal.append(inputBreakfast);
          inputMeal.append(inputLunch);
          inputMeal.append(inputDinner);
          inputMeal.append(inputSnack);
          labelMeal.append(inputMeal);
          form.append(labelMeal);

          form.append('<br>')
          form.append('<button>Add to Log</button>')


          $('.' + newClass).append(form);
          $('.' + newClass).append('<button id="clickme">Apply Servings</button>');

              $('#clickme').click(function(){
                 event.preventDefault();
                  console.log($('select').val());
                  caloriesNew = ( calories * $('select').val() )
                  caloriesFromFatNew = ( caloriesFromFat * $('select').val() )
                  proteinNew = ( protein * $('select').val() )
                  fatNew = ( fat * $('select').val() )
                  saturatedFatNew = ( saturatedFat * $('select').val() )
                  sodiumNew = ( sodium * $('select').val() )
                  sugarNew = ( sugar * $('select').val() )
                  carbsNew = ( carbs * $('select').val() )
                  $('.calories').val(caloriesNew)
                  $('.caloriesFromFat').val(caloriesFromFatNew)
                  $('.protein').val(proteinNew)
                  $('.fat').val(fatNew)
                  $('.saturatedFat').val(saturatedFatNew)
                  $('.sodium').val(sodiumNew)
                  $('.sugar').val(sugarNew)
                  $('.carbs').val(carbsNew)
               })
      }


    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}







