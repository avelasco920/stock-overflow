# StockOverflow

[Link to site](https://stocksoverflow.herokuapp.com/#/)

StockOverflow is a full-stack financial trading web application that
combines realtime data with hypothetical funds allowing users to
practice day-trading without any financial risk. It was modeled and
influenced by Robinhood's unreleased desktop web application.

### Features

+ Search for companies by ticker symbol or company name
+ Obtain real-time trade price pulled from external API
+ Visualize historical stock prices for up to five years
+ Buy and sell company shares based on current market-price
+ Watch companies to add to user's Watchlist
+ See financial portfolio on account page
+ Read news articles on publicly traded companies

### Technologies

+ Ruby on Rails backend
+ React/Redux frontend
+ Alpha Vantage API
+ ChartJS API
+ SASS
+ Object Oriented Programming

## Demos

### Data Visualization

The graph on the company show page was created using the ChartJS library.
Once the component begins to mount, an API pull request to AlphaVantage
is made on the frontend to grab real time and historical trading
prices up to five years.
+ Users have the ability to toggle over various time frames (1 Day,
  1 Week, 1 Month, 3 Months, 1 Year, 5 Years) The MomentJS Javascript
  library was utilized to parse the data based on specific time frames.
+ Users have the ability to check the closing prices for the day/minute
  as they hover over the graph
+ The graph changes color based on whether the company has a positive
  or negative change in price value for the specific time frame

![Data Visualization](https://github.com/avelasco920/stock-overflow/blob/master/wireframes/Chart.gif?raw=true)

### Trading On The Site

Trading on the site is made easy with a modal created using
vanilla Javascript. The simple UX/UI encourages users to either buy or
sell shares of the specific company. Users can easily see how much their
trade will cost/make them with a responsive calculation. They can easily
compare the total with their current buying power in the same form.

![Trading](https://github.com/avelasco920/stock-overflow/blob/master/wireframes/Trade.gif?raw=true)


## Select Code Snippets

**`TradeEvent`**

To account for the various scenarios a user might encounter when a
trade is made. These methods belong to the `TradeEvent` class.

When a user buys or sells stock, the action is stored in the database
as a `TradeEvent`. The `TradeEvent` handles the appropriate
changes affecting the `User` portfolio and their `Stock` in a company.

```
def self.handle_buy(event, user, company)
  num_shares = event[:num_shares].to_i
  stock = Stock.find_by(user_id: user.id, company_id: company.id)
  stock_value = Stock.value(company, num_shares)

  if stock_value > user.cash_value
    return "You don't have enough funds for this purchase"
  elsif stock
    user.decrease_cash_value(stock_value)
    stock.num_shares += num_shares
    stock.save
  else
    user.decrease_cash_value(stock_value)
    user.stocks.create!(company_id: company.id, num_shares: event[:num_shares].to_i)
  end
end

def self.handle_sell(event, user, company)
  num_shares = event[:num_shares].to_i
  stock = Stock.find_by(user_id: user.id, company_id: company.id)
  stock_value = Stock.value(company, num_shares)

  if !stock
    return "You have no stock in this company to sell."
  elsif num_shares > stock.num_shares
    return "You don't have enough shares to make that sale."
  elsif num_shares == stock.num_shares
    user.increase_cash_value(stock_value)
    stock.destroy
  else
    user.increase_cash_value(stock_value)
    stock.num_shares -= num_shares
    stock.save
  end
end
```

## Future Development

+ Create backend rake task to cache historical stock prices (reduce
  api load time)
+ Implement graph logic below to properly and accurately show
  user's portfolio history

![Homepage](https://github.com/avelasco920/stock-overflow/raw/datavis/wireframes/Wireframes%20Graph3.jpg?raw=true)


[Link to site](https://stocksoverflow.herokuapp.com/#/)
