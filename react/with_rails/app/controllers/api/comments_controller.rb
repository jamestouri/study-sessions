class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.save
  end



  def update
    @comment = Comment.find(params[:id])
  end

  private
  def comment_params
    params.require(:comment).permit(:text, :post_id)
  end
end
