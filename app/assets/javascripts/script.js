 $( document ).ready(function() {
    console.log('#loaded')

    $(document).on('click','#searchit',function(){
      search = $('.search').val()
      getNutritionInfo(search)
      console.log('heyyyo')
    })

    $('.collapsible').collapsible();

    $(document).on('click','#clearit',function(){
      $('.food').remove();
    })

     $(document).on('click','.day',function(){
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
      containerDiv = $('<div class="food container"></div>')
      for(i=0;i<20;i++) {
        if (i % 2 === 0)
        rowDiv = $('<div class="row"></div>')
        resultDiv = $('<div class="col s12 offset-s2"></div>');
        results = $('<ul></ul>');
        resultItem1 = $('<li class="name"></li>');
        resultItem2 = $('<li class="name2"></li>');
        resultItem3 = $('<li class="specific"></li>');
        resultItem4 = $('<li></li>');
        brand_name = data.hits[i].fields.brand_name;
        item_name = data.hits[i].fields.item_name;
        id = data.hits[i].fields.item_id
        resultItem1.text(item_name);
        resultItem2.text(brand_name);
        resultItem3.text(id);
        resultItem4.text('Item ID: ')
        resultDiv.addClass(id)
        results.append(resultItem1);
        results.append(resultItem2);
        results.append(resultItem4);
        results.append(resultItem3);
        resultDiv.append(results);
        rowDiv.append(resultDiv);
        containerDiv.append(rowDiv)
        $('body').append(containerDiv)

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

          containerDiv = $('<div class="BIG container"></div>')
          rowDiv = $('<div class="row"></div>')

          form = $('<form action="/logs" method="POST"></form')

          columnDiv1 = $('<div class="FORMITEMS"></div>')
          labelDate = $('<label></label>');
          labelDate.text('Date: ');
          inputDate = $("<input name=\"day\" value=\""+ date +"\"></input>")
          labelDate.append(inputDate)
          columnDiv1.append(labelDate)
          form.append(columnDiv1)


          columnDiv2 = $('<div class="FORMITEMS"></div>')
          labelBrandName = $('<label></label>');
          labelBrandName.text('Brand: ');
          inputBrandName = $("<input name=\"brand\" value=\""+ name +"\"></input>")
          labelBrandName.append(inputBrandName)
          columnDiv2.append(labelBrandName)
          form.append(columnDiv2)

          columnDiv3 = $('<div class="FORMITEMS"></div>')
          labelItemName = $('<label></label>');
          labelItemName.text('Item: ');
          inputItemName = $("<input name=\"name\" value=\""+ itemName +"\"></input>")
          labelItemName.append(inputItemName)
          columnDiv3.append(labelItemName)
          form.append(columnDiv3)

          columnDiv5 = $('<div class="FORMITEMS"></div>')
          labelCalories = $('<label></label>');
          labelCalories.text('Calories: ');
          inputCalories = $('<input name="calories" class="calories" value='+ calories + '></input>')
          labelCalories.append(inputCalories)
          columnDiv5.append(labelCalories)
          form.append(columnDiv5)



          columnDiv6 = $('<div class="FORMITEMS"></div>')
          labelCaloriesFromFat = $('<label></label>');
          labelCaloriesFromFat.text('Calories from fat: ');
          inputCaloriesFromFat = $('<input name="cal_from_fat" class="caloriesFromFat" value='+ caloriesFromFat + '></input>')
          labelCaloriesFromFat.append(inputCaloriesFromFat)
          columnDiv6.append(labelCaloriesFromFat)
          form.append(columnDiv6)



          columnDiv7 = $('<div class="FORMITEMS"></div>')
          labelProtein = $('<label></label>');
          labelProtein.text('Protein (grams): ');
          inputProtein = $('<input name="protein" class="protein" value='+ protein +'></input>')
          labelProtein.append(inputProtein)
          columnDiv7.append(labelProtein)
          form.append(columnDiv7)



          columnDiv8 = $('<div class="FORMITEMS"></div>')
          labelFat = $('<label></label>');
          labelFat.text('Total Fat (grams): ');
          inputFat = $('<input name="fat" class="fat" value='+ fat  + '></input>')
          labelFat.append(inputFat)
          columnDiv8.append(labelFat)
          form.append(columnDiv8)



          columnDiv9 = $('<div class="FORMITEMS"></div>')
          labelSaturatedFat = $('<label></label>');
          labelSaturatedFat.text('Saturated Fat (grams): ');
          inputSaturatedFat = $('<input name="sat_fat" class="saturatedFat" value='+ saturatedFat +'></input>')
          labelSaturatedFat.append(inputSaturatedFat)
          columnDiv9.append(labelSaturatedFat)
          form.append(columnDiv9)



          columnDiv10 = $('<div class="FORMITEMS"></div>')
          labelSodium = $('<label></label>');
          labelSodium.text('Sodium (milligrams): ');
          inputSodium = $('<input name="sodium" class="sodium" value='+ sodium + '></input>')
          labelSodium.append(inputSodium)
          columnDiv10.append(labelSodium)
          form.append(columnDiv10)



          columnDiv11 = $('<div class="FORMITEMS"></div>')
          labelSugar = $('<label></label>');
          labelSugar.text('Sugar (grams): ');
          inputSugar = $('<input name="sugar" class="sugar" value='+ sugar + '> </input>')
          labelSugar.append(inputSugar)
          columnDiv11.append(labelSugar)
          form.append(columnDiv11)




          columnDiv12 = $('<div class="FORMITEMS"></div>')
          labelCarbs = $('<label></label>');
          labelCarbs.text('Carbohydrates (grams): ');
          inputCarbs = $('<input name="carbs" class="carbs" value='+ carbs + '></input>')
          labelCarbs.append(inputCarbs)
          columnDiv12.append(labelCarbs)
          form.append(columnDiv12)


          columnDiv13 = $('<div class="FORMITEMS"></div>')
          labelMeal = $('<label></label>');
          labelMeal.text('Add to meal:' );

          labelMeals = $('<label></label>');
          inputMeal = $('<select class=" browser-default" name="meal"></select>');
          inputBreakfast = $('<option>Breakfast</option>');
          inputLunch = $('<option>Lunch</option>');
          inputDinner = $('<option>Dinner</option>');
          inputSnack = $('<option>Snack</option>');
          inputMeal.append(inputBreakfast);
          inputMeal.append(inputLunch);
          inputMeal.append(inputDinner);
          inputMeal.append(inputSnack);
          labelMeal.append(labelMeals);
          labelMeals.append(inputMeal);
          columnDiv13.append(labelMeal)
          form.append(columnDiv13);

          columnDiv4 = $('<div class="FORMITEMS"></div>')
          labelServing = $('<label></label>');
          labelServing.text('Number of servings (Serving Size ' +servingSize + ' ' + servingUnit + ') :' );

          labelServings = $('<label></label>');
          inputServing = $('<select class="SERVINGS browser-default" name="servings"></select>');
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
          labelServing.append(labelServings);
          labelServings.append(inputServing);
          columnDiv4.append(labelServing)
          form.append(columnDiv4);

          columnDiv20 = $('<div class="FORMITEMS"></div>')
          columnDiv20.append('<button id="clickme">Apply Servings</button>');
          columnDiv20.append('<button>Add to Log</button>');
          form.append(columnDiv20)
          rowDiv.append(form)
          containerDiv.append(rowDiv)

          $('.' + newClass).append(containerDiv);


              $('#clickme').click(function(){
                 event.preventDefault();
                  console.log($('.SERVINGS').val());
                  caloriesNew = ( calories * $('.SERVINGS').val() )
                  caloriesFromFatNew = ( caloriesFromFat * $('.SERVINGS').val() )
                  proteinNew = ( protein * $('.SERVINGS').val() )
                  fatNew = ( fat * $('.SERVINGS').val() )
                  saturatedFatNew = ( saturatedFat * $('.SERVINGS').val() )
                  sodiumNew = ( sodium * $('.SERVINGS').val() )
                  sugarNew = ( sugar * $('.SERVINGS').val() )
                  carbsNew = ( carbs * $('.SERVINGS').val() )
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





