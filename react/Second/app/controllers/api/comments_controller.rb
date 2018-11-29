class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :index
    end
  end

  def delete
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :index
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:text)
  end
end
