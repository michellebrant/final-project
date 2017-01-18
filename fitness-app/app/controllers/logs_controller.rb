class LogsController < ApplicationController


def create
  Log.create(calories: params[:calories],
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


