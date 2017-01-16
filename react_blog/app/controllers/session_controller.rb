class SessionController < ApplicationController

  def create
    puts params
    if @user = User.find_by(session_params)
      session[:user_id] = @user.id
    end
    return "THIS STRING"
  end

  private

  def session_params
    params.fetch(:session, {})
  end


end
