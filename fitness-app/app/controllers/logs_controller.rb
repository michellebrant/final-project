class LogsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
   @logs = Log.all
   @users = User.all
   @current_time = Time.now
   @current_time_real = @current_time.to_s
   @currentTimeReal = @current_time_real[0] + @current_time_real[1] + @current_time_real[2] + @current_time_real[3]+ @current_time_real[4] + @current_time_real[5] + @current_time_real[6] + @current_time_real[7]+@current_time_real[8] + @current_time_real[9] + ' '

  end

  def show
    @logs = Log.all
    @users = User.all
    @id = params[:id]
    @id2= @id.gsub(' ', '')
    @session = session[:user_id]
    @breakfastCalories = Log.where(day: @id2, user_id: @session)
    @calCounterBreakfast = 0
    @calFromFatCounterBreakfast = 0
    @proteinCounterBreakfast = 0
    @fatCounterBreakfast = 0
    @saturatedFatCounterBreakfast = 0
    @sodiumCounterBreakfast = 0
    @sugarCounterBreakfast = 0
    @carbCounterBreakfast = 0
    @breakfastCalories.each do |item|
      @calCounterBreakfast+= item.calories
      @calFromFatCounterBreakfast+= item.cal_from_fat
      @proteinCounterBreakfast+= item.protein
      @fatCounterBreakfast+= item.fat
      @saturatedFatCounterBreakfast+= item.sat_fat
      @sodiumCounterBreakfast+= item.sodium
      @sugarCounterBreakfast+= item.sugar
      @carbCounterBreakfast+= item.carbs
    end
  end
  #     @lunchCalories = Log.where(meal: 'Lunch', day: @id2, user_id: @session)
  #     @calCounterLunch = 0
  #     @calFromFatCounterLunch = 0
  #     @proteinCounterLunch = 0
  #     @fatCounterLunch = 0
  #     @saturatedFatCounterLunch = 0
  #     @sodiumCounterLunch = 0
  #     @sugarCounterLunch = 0
  #     @carbCounterLunch = 0
  #   @LunchCalories.each do |item|
  #     @calCounterLunch+= item.calories
  #     @calFromFatCounterLunch+= item.cal_from_fat
  #     @proteinCounterLunch+= item.protein
  #     @fatCounterLunch+= item.fat
  #     @saturatedFatCounterLunch+= item.sat_fat
  #     @sodiumCounterLunch+= item.sodium
  #     @sugarCounterLunch+= item.sugar
  #     @carbCounterLunch+= item.carbs
  #   end
  # end
  def create

    Log.create(   food_name: params[:name],
                  user_id: session[:user_id],
                  brand: params[:brand],
                  day: params[:day],
                  calories: params[:calories],
                  cal_from_fat: params[:cal_from_fat],
                  protein: params[:protein],
                  fat: params[:fat],
                  sat_fat: params[:sat_fat],
                  sodium: params[:sodium],
                  sugar: params[:sugar],
                  carbs: params[:carbs],
                  servings: params[:servings],
                  meal: params[:meal])
        redirect_to "/logs"


  end
end

