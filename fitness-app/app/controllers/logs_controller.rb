class LogsController < ApplicationController
  skip_before_filter :verify_authenticity_token


def create

  Log.create(   food_name: params[:name],
                user_id: session[:user_id],
                brand: params[:brand],
                day: params[:date],
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

