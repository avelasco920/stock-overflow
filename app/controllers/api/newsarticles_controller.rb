class Api::NewsarticlesController < ApplicationController
  def show
    @newsarticle = NewsArticle.find(params[:id])
  end

  def index
    @newsarticles = NewsArticle.all
  end
end
