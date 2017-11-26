# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Company.destroy_all
Stock.destroy_all
NewsArticle.destroy_all
WatchlistItem.destroy_all

#-------------------------------#
#------------ User -------------#
#-------------------------------#

phoebe = User.create(
  first_name: "Phoebe",
  last_name: "Buffet",
  username: "smelly_cat",
  email: "phoebe@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 2387.56
)

angel = User.create(
  first_name: "Angel",
  last_name: "Velasco",
  username: "angel_investor",
  email: "angel@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 200.78
)

kyle = User.create(
  first_name: "Kyle",
  last_name: "Chen",
  username: "kyle_investor",
  email: "kyle@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 2046.14
)

truong = User.create(
  first_name: "Truong",
  last_name: "Nguyen",
  username: "truong_investor",
  email: "truong@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 10460.97
)

maxine = User.create(
  first_name: "Maxine",
  last_name: "Chui",
  username: "maxine_investor",
  email: "maxine@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 4493.32
)

#-------------------------------#
#----------- Company -----------#
#-------------------------------#

google = Company.create(
  name: "Google", symbol: "GOOGL", market_price: 1051.92
)

netflix = Company.create(
  name: "Netflix", symbol: "NFLX", market_price: 196.02
)

snap = Company.create(
  name: "Snap", symbol: "SNAP", market_price: 12.50
)

nvidia = Company.create(
  name: "Nvidia", symbol: "NVDA", market_price: 214.85
)

tesla = Company.create(
  name: "Tesla", symbol: "TSLA", market_price: 312.19
)

facebook = Company.create(
  name: "Facebook", symbol: "FB", market_price: 180.65
)

amd = Company.create(
  name: "Advanced Micro Devices", symbol: "AMD", market_price: 11.37
)

apple = Company.create(
  name: "Apple", symbol: "AAPL", market_price: 174.83
)

square = Company.create(
  name: "Square", symbol: "SQ", market_price: 48.72
)

amazon = Company.create(
  name: "Amazon", symbol: "AMZN", market_price: 1157.69
)


#-------------------------------#
#------------ Stock ------------#
#-------------------------------#

Stock.create(
  user_id: phoebe.id,
  company_id: google.id,
  num_shares: 2
)
Stock.create(
  user_id: phoebe.id,
  company_id: netflix.id,
  num_shares: 4
)
Stock.create(
  user_id: phoebe.id,
  company_id: snap.id,
  num_shares: 4
)
Stock.create(
  user_id: phoebe.id,
  company_id: tesla.id,
  num_shares: 8
)
Stock.create(
  user_id: phoebe.id,
  company_id: nvidia.id,
  num_shares: 6
)
Stock.create(
  user_id: phoebe.id,
  company_id: amazon.id,
  num_shares: 1
)


Stock.create(
  user_id: angel.id,
  company_id: apple.id,
  num_shares: 18
)
Stock.create(
  user_id: angel.id,
  company_id: square.id,
  num_shares: 4
)
Stock.create(
  user_id: angel.id,
  company_id: amazon.id,
  num_shares: 3
)


Stock.create(
  user_id: kyle.id,
  company_id: apple.id,
  num_shares: 6
)
Stock.create(
  user_id: kyle.id,
  company_id: square.id,
  num_shares: 16
)


Stock.create(
  user_id: truong.id,
  company_id: apple.id,
  num_shares: 6
)
Stock.create(
  user_id: truong.id,
  company_id: square.id,
  num_shares: 2
)


#-------------------------------#
#-------- WatchListItem --------#
#-------------------------------#

WatchlistItem.create(
  user_id: angel.id,
  company_id: amazon.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: square.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: tesla.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: apple.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: netflix.id
)


WatchlistItem.create(
  user_id: phoebe.id,
  company_id: amd.id
)
WatchlistItem.create(
  user_id: phoebe.id,
  company_id: square.id
)
WatchlistItem.create(
  user_id: phoebe.id,
  company_id: apple.id
)
WatchlistItem.create(
  user_id: phoebe.id,
  company_id: facebook.id
)

#-------------------------------#
#--------- NewsArticle ---------#
#-------------------------------#

NewsArticle.create(
  publisher: "Forbes",
  title: "iPhone X Supply Quickly Catching Up To Demand",
  company_id: apple.id,
  date: Date.new(2017, 11, 24),
  views: 19,
  img_url: "https://specials-images.forbesimg.com/dam/imageserve/869824584/960x0.jpg?fit=scale",
  source: "https://www.forbes.com/sites/chuckjones/2017/11/24/iphone-x-supply-quickly-catching-up-to-demand/#1cf44f787c21",
  body: "Apple decreased the lead-time for the iPhone X from 2 to
        3 weeks to 1 to 2 weeks on Thanksgiving Day. I have tracked
        iPhone lead-times for the 4S, 5, 5c, 5s, 6, 6s, 7 and now the
        8 and X. While I didn’t follow all of them until the lead-times
        disappeared I believe it is worthwhile to follow the iPhone 8’s
        and X’s and compare them to some of the earlier models,
        especially the iPhone 6 since it saw such strong demand."
)

NewsArticle.create(
  publisher: "Forbes",
  title: "The Tiger Of Silicon Valley: Glen Kacher\'s Sizzling Hedge Fund",
  date: Date.new(2017, 11, 21),
  company_id: snap.id,
  views: 23,
  img_url: "https://blogs-images.forbes.com/nathanvardi/files/2017/11/1106_inv-light-street-light-street-glen-kacher_1200x675-1200x675.jpg?width=960",
  source: "https://www.forbes.com/sites/nathanvardi/2017/11/21/the-tiger-of-silicon-valley-glen-kachers-sizzling-hedge-fund/#50e233992904",
  body: "When you live and work in a town where the median home costs
        $2.7 million and hobnob with the executives of billionaire
        factories like Facebook and Tesla, it\'s easy to see why you
        might think technology stocks are invincible. So far in 2017,
        the Nasdaq Composite index has gained 25%.

        Light Street Capital, based in Palo Alto, California, is
        up 52.7% net of fees in the first 10 months of 2017, making
        it the top-performing hedge fund this year. Its baby-faced
        boss, Glen Kacher, is pounding the table, saying tech stocks
        have room to run.

        \"The idea that this is a bubble is a joke,\" says
        Kacher, 46. \"I don't think people are looking at the
        fundamentals.\"

        Since its inception in 2010, Kacher's $1.1 billion
        tech-focused hedge fund has delivered annualized net
        returns of 19.8%. More than anything, he has been in the
        right place at the right time. By parking himself in Silicon
        Valley instead of New York and spending time with VCs and
        entrepreneurs rather than Wall Street's sell-side analysts,
        Kacher has gained the equivalent of first-mover advantage
        among hedge funds."
)

NewsArticle.create(
  publisher: "Forbes",
  title: "Three Stock Picks From A Manager Who\'s Beaten The Roaring
          S&P 500 By Playing Defense",
  date: Date.new(2017, 11, 21),
  company_id: square.id,
  views: 38,
  img_url: "https://specials-images.forbesimg.com/imageserve/875048394/960x0.jpg?fit=scale",
  source: "https://www.forbes.com/sites/antoinegara/2017/11/21/three-stock-picks-from-a-manager-whos-beat-the-roaring-sp-500-by-playing-defense/#4a6f36bf2348",
  body: "Investment out-performance is a rare commodity on Wall Street
        due to a roaring bull market that's left most active managers
        in the dust. For those who are beating the market, having a
        good defensive plan for the inevitable downturn is paramount.

        Take Adam Abelson, portfolio manager of the $136 million
        Stralem Equity Fund. He runs a stock-only portfolio that
        acts more like a balanced fund that holds an allocation to
        the safety of bonds. Abelson avoids bonds for the favor of
        stocks, but his twist is to split Stralem\'s portfolio into
        what he calls \"up market stocks,\" growth companies that should
        outperform in bull markets, and \"down market stocks\" like
        utilities and consumer staples that preserve capital during
        bear markets.

        This common sense strategy, a bedrock of family-owned Stralem
        & Co, has yielded impressive results. Not only has Abelson's
        Equity Fund outperformed balanced funds, it's also beaten the
        soaring S&P 500 over the long haul. Net of fees, Stralem's
        Equity Fund has returned 11.3% annually over five years, 9.4%
        over ten years and 10.8% over twenty years, beating the S&P 500
        by between 2% and 2.8% a year. Having a good defense is valuable."
)
