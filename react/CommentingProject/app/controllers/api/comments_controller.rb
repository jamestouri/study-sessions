class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :index
    end
  end

  def index
    @comments = Comment.all
  end

  def delete
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :index
    end
  end


  private
  def comment_params
    params.permit(:comment).require(:text)
  end
end
