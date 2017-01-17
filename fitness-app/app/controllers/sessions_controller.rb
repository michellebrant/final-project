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
    @current_time = DateTime.now

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
