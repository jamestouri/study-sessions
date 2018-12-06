class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

    def index
      @comments = Comment.all
      render :json => @comments
    end

    def create
      @comment = Comment.new(comment_params)
      if @comment.save
        render :json => @comment
      end
    end

    private
    def comment_params
      params.require(:comment).permit(:text)
    end

end
