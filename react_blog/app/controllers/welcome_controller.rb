class WelcomeController < ApplicationController

  def index
    render component: 'App'
  end

end
