@newsarticles.each do |newsarticle|
  json.set! newsarticle.id do
    json.partial! 'api/newsarticles/newsarticle', newsarticle: newsarticle
  end
end
