json.extract! news_article, :id, :company_id, :publisher, :title,
                          :date, :img_url, :source, :body, :views

json.set! :company_name, company.name
json.set! :company_symbol, company.symbol
