class ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @articles = Article.all
    render :json =>@articles
  end

  def main
  end

  def show
    @article = Article.find(params[:id])
    render :json => @article
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      # this will return the create.html.erb file
    else
      # this will return a 404 in case item could not be created.
      head :status => 404
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      head :ok
    else
      head :status => 404
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :ok
  end

  private
  def article_params
    params.require(:article).permit(:title, :duedate)
  end
end
