class SessionController < ApplicationController

  def create
    respond_to do |format|
      if @user = User.find_by(session_params)
        render :json => @user
      else
        format.json @user.errors
      end
    end
  end

  private

  def session_params
    params.fetch(:session, {})
  end

end
