@news_articles.each do |news_article|
  json.set! news_article.id do
    json.partial! 'api/newsarticles/newsarticle', news_article: news_article
  end
end
