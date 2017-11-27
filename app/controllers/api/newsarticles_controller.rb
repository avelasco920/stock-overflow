class Api::NewsarticlesController < ApplicationController
  def show
    @news_article = NewsArticle.find(params[:id])
    @company = Company.find(@news_article.company_id)
  end

  def index
    @news_articles = NewsArticle.all
    @companies = Company.all
  end

  def update
    @news_article = NewsArticle.find(params[:id])
    @news_article.increment_view
  end
end
