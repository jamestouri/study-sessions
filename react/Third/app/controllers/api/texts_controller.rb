class Api::TextsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @texts = Text.all
  end

  def create
    @text = Text.new(text_params)
    if @text.save
      render :index
    end
  end

  private
  def text_params
    params.require(:text).permit(:text)
  end
end
