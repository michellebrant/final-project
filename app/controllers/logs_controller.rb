class LogsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
   @logs = Log.all
   @users = User.all
   @current_time = Time.now
   @current_time_real = @current_time.to_s
   @currentTimeReal = @current_time_real[0] + @current_time_real[1] + @current_time_real[2] + @current_time_real[3]+ @current_time_real[4] + @current_time_real[5] + @current_time_real[6] + @current_time_real[7]+@current_time_real[8] + @current_time_real[9]


  end

  def destroy
    Log.destroy(params[:id])
    redirect_to "/logs"
  end

  def show
    @logs = Log.all
    @users = User.all
    @id = params[:id]
    @id2= @id.gsub(' ', '')
    @session = session[:user_id]
    @me = User.where(id: session[:user_id])
    @current_time = Time.now
    @current_time_real = @current_time.to_s
    @currentTimeReal = @current_time_real[0] + @current_time_real[1] + @current_time_real[2] + @current_time_real[3]+ @current_time_real[4] + @current_time_real[5] + @current_time_real[6] + @current_time_real[7]+@current_time_real[8] + @current_time_real[9]
    @mylogs = Log.where(user_id: session[:user_id], day: @currentTimeReal)
    # FIX THAT - so its the day you are on, not just the 21st^
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
    @total = @calCounterBreakfast + @proteinCounterBreakfast + @fatCounterBreakfast + @saturatedFatCounterBreakfast + (@sodiumCounterBreakfast/1000) + @sugarCounterBreakfast + @carbCounterBreakfast
    if @me[0]['caloriegoal']
    @calorieGoalMade = @me[0]['caloriegoal'] < @calCounterBreakfast
    @caloriesLeft = @me[0]['caloriegoal'] - @calCounterBreakfast

    @proteinGoalMade = @me[0]['proteingoal'] < @proteinCounterBreakfast
    @proteinLeft = @me[0]['proteingoal'] - @proteinCounterBreakfast

    @fatGoalMade = @me[0]['fatgoal'] < @fatCounterBreakfast
    @fatLeft = @me[0]['fatgoal'] - @fatCounterBreakfast

    @satFatGoalMade = @me[0]['satfatgoal'] < @saturatedFatCounterBreakfast
    @satFatLeft = @me[0]['satfatgoal'] - @saturatedFatCounterBreakfast

    @sodiumGoalMade = @me[0]['sodiumgoal'] < @sodiumCounterBreakfast
    @sodiumLeft = @me[0]['sodiumgoal'] - @sodiumCounterBreakfast

    @sugarGoalMade = @me[0]['sugargoal'] < @sugarCounterBreakfast
    @sugarLeft = @me[0]['sugargoal'] - @sugarCounterBreakfast

    @carbGoalMade = @me[0]['sugargoal'] < @carbCounterBreakfast
    @carbLeft = @me[0]['sugargoal'] - @carbCounterBreakfast
    else
    end

  end

  def edit
    @log = Log.find_by(id: params[:id])
  end

  def update
    Log.find_by(id: params[:id]).update(log_params)
    redirect_to "/logs"
  end

def log_params
  params.require(:log).permit(:name, :brand, :day, :calories, :cal_from_fat, :protein, :fat, :sat_fat, :sodium, :sugar, :carbs, :servings, :meal)
end

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

