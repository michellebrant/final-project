class SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token
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

    if (@currentTimeReal[5] + @currentTimeReal[6] === '01')
      @currentTimeReal2 = 'January' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]
    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '02')
      @currentTimeReal2 = 'February' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '03')
      @currentTimeReal2 = 'March' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '04')
      @currentTimeReal2 = 'April' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '05')
      @currentTimeReal2 = 'May' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '06')
      @currentTimeReal2 = 'June' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '07')
      @currentTimeReal2 = 'July' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '08')
      @currentTimeReal2 = 'August' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '09')
      @currentTimeReal2 = 'September' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '10')
      @currentTimeReal2 = 'October' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '11')
      @currentTimeReal2 = 'November' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end

    if (@currentTimeReal[5] + @currentTimeReal[6] === '12')
      @currentTimeReal2 = 'December' + ' ' + @currentTimeReal[8] + @currentTimeReal[9] + ', ' + @currentTimeReal[0] + @currentTimeReal[1] + @currentTimeReal[2] + @currentTimeReal[3]

    end
    # emailCheck = User.find_by(email: @email)
    # @id = emailCheck[:id]


    # if emailCheck == nil





  if session[:user_id]
    # Means our user is signed in. Add the authorization to the user
    User.find(session[:user_id]).add_provider(auth_hash)


  else
    # Log him in or sign him up
    auth = Authorization.find_or_create(auth_hash)

    # Create the session
    session[:user_id] = auth.id

        user = User.create(id: auth.id,
                  email: @email,
                  fname: @first,
                  lname: @last,
                  height: @newheight2,
                  weight: @newweight2,
                  log_id: Time.now)
      end


  # def destroy
  #   session[:user_id] = nil
  #   render :text => "You've logged out!"
  # end

  # def failure
  #   render :text => "Sorry, but you didn't allow access to our app!"
  # end
end
end
