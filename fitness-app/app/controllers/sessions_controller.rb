class SessionsController < ApplicationController
  def new
  end


  def create
    auth_hash = request.env['omniauth.auth']

    @userdata = auth_hash
    @height = @userdata[:extra][:raw_info][:height]
    @pic = 'http://static.mapmyfitness.com' + @userdata[:extra][:raw_info][:_links][:image][0][:href]
    @weight = @userdata[:extra][:raw_info][:weight]
    @goal = @userdata[:extra][:raw_info][:goal_statement]
    @newweight = @weight * 2.20462262185
    @newweight2 = @newweight.floor
    @newheight = @height * 3.2808
    @newheight2 = @newheight.floor
    @first = @userdata[:info][:first_name]
    @last = @userdata[:info][:last_name]
    @email = @userdata[:extra][:raw_info][:email]
    @current_time = Time.now
    @current_time_real = @current_time.to_s
    @currentTimeReal = @current_time_real[0] + @current_time_real[1] + @current_time_real[2] + @current_time_real[3]+ @current_time_real[4] + @current_time_real[5] + @current_time_real[6] + @current_time_real[7]+@current_time_real[8] + @current_time_real[9]

    emailCheck = User.find_by(email: @email)

    if emailCheck == nil
      User.create(email: @email,
                  fname: @first,
                  lname: @last,
                  height: @newheight2,
                  weight: @newweight2,
                  log_id: Time.now)
  end
end


  def destroy
    session[:user_id] = nil
    render :text => "You've logged out!"
  end

  def failure
    render :text => "Sorry, but you didn't allow access to our app!"
  end
end
