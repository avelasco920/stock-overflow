json.array!(@newsarticles) do |newsarticle|
  json.partial! 'api/newsarticles/newsarticle', newsarticle: newsarticle
end
