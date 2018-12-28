class Api::PostsController < ApplicationController
  skip_before_action :authenticity_token
  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :index
    end
  end

  def show
    @post = Post.find(params[:id])
  end
  private
  def post_params
    params.require(:post).permit(:body, :name)
  end
end
