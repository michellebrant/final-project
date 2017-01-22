class WeightbydayController < ApplicationController
    skip_before_filter :verify_authenticity_token
  def create

  Weightbyday.create(weight: params[:weight],
                day: params[:date],
                userid: session[:user_id] )
      redirect_to "/weightbyday"
  end

  def index
    @weight = Weightbyday.all
    @weight = Weightbyday.where(userid: session[:user_id])
  end
end
