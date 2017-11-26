class Api::NewsarticlesController < ApplicationController
  def show
    @news_article = NewsArticle.find(params[:id])
  end

  def index
    @news_articles = NewsArticle.all
  end

  def update
    @news_article = NewsArticle.find(params[:id])
    @news_article.increment_view
  end
end
