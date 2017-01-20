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

