 $( document ).ready(function() {

    $("#searchit").click(function(){
      search = $('.search').val()
      getNutritionInfo(search)
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
        resultItem2 = $('<li class="specific"></li>');
        name = data.hits[i].fields.brand_name;
        id = data.hits[i].fields.item_id
        resultItem1.text(name);
        resultItem2.text(id);
        resultDiv.addClass(id)
        results.append(resultItem1);
        results.append(resultItem2);
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
          sugar = data.nf_sugars;
          carbs = data.nf_total_carbohydrate;
          fat = data.nf_total_fat;

          form = $('<form></form')
          labelServing = $('<label></label>');
          labelServing.text('Serving Size: ');
          inputServing = $('<input value='+ servingSize +'> '+servingUnit+'</input>')
          labelServing.append(inputServing)
          form.append(labelServing)

          form.append('<br>')

          labelCalories = $('<label></label>');
          labelCalories.text('Calories: ');
          inputCalories = $('<input class="calories" value='+ calories + '></input>')
          labelCalories.append(inputCalories)
          form.append(labelCalories)

          form.append('<br>')

          labelCaloriesFromFat = $('<label></label>');
          labelCaloriesFromFat.text('Calories from fat: ');
          inputCaloriesFromFat = $('<input class="caloriesFromFat" value='+ caloriesFromFat + '></input>')
          labelCaloriesFromFat.append(inputCaloriesFromFat)
          form.append(labelCaloriesFromFat)

          form.append('<br>')

          labelProtein = $('<label></label>');
          labelProtein.text('Protein: ');
          inputProtein = $('<input class="protein" value='+ protein +'> grams</input>')
          labelProtein.append(inputProtein)
          form.append(labelProtein)

          form.append('<br>')

          labelFat = $('<label></label>');
          labelFat.text('Total Fat: ');
          inputFat = $('<input class="fat" value='+ fat  + '> grams</input>')
          labelFat.append(inputFat)
          form.append(labelFat)

          form.append('<br>')

          labelSaturatedFat = $('<label></label>');
          labelSaturatedFat.text('Saturated Fat: ');
          inputSaturatedFat = $('<input class="saturatedFat" value='+ saturatedFat +'> grams</input>')
          labelSaturatedFat.append(inputSaturatedFat)
          form.append(labelSaturatedFat)

          form.append('<br>')

          labelSodium = $('<label></label>');
          labelSodium.text('Sodium: ');
          inputSodium = $('<input class="sodium" value='+ sodium + '> grams</input>')
          labelSodium.append(inputSodium)
          form.append(labelSodium)

          form.append('<br>')

          labelSugar = $('<label></label>');
          labelSugar.text('Sugar: ');
          inputSugar = $('<input class="sugar" value='+ sugar + '> grams</input>')
          labelSugar.append(inputSugar)
          form.append(labelSugar)

          form.append('<br>')

          labelCarbs = $('<label></label>');
          labelCarbs.text('Carbohydrates: ');
          inputCarbs = $('<input class="carbs" value='+ carbs + '> grams</input>')
          labelCarbs.append(inputCarbs)
          form.append(labelCarbs)

          form.append('<br>')

          labelServings = $('<label></label>');
          labelServings.text('Number of Servings: ');
          inputServing = $('<select></select>');
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
          inputMeal = $('<select></select>');
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



      })







