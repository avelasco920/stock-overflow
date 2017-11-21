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

angel = User.create(
  first_name: "Angel",
  last_name: "Velasco",
  username: "angel_investor",
  email: "angel@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 200
)

kyle = User.create(
  first_name: "Kyle",
  last_name: "Chen",
  username: "kyle_investor",
  email: "kyle@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 2000
)

truong = User.create(
  first_name: "Truong",
  last_name: "Nguyen",
  username: "truong_investor",
  email: "truong@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 10000
)

maxine = User.create(
  first_name: "Maxine",
  last_name: "Chui",
  username: "maxine_investor",
  email: "maxine@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 4000
)

#-------------------------------#
#----------- Company -----------#
#-------------------------------#

apple = Company.create(
  name: "Apple", symbol: "AAPL", market_price: 170
)

square = Company.create(
  name: "Square", symbol: "SQ", market_price: 47
)

amazon = Company.create(
  name: "Amazon", symbol: "AMZN", market_price: 1140
)


#-------------------------------#
#------------ Stock ------------#
#-------------------------------#

shares_angel_apple = {
  user_id: angel.id, company_id: apple.id, num_shares: 18
}
shares_angel_square = {
  user_id: angel.id, company_id: square.id, num_shares: 4
}
shares_angel_amazon = {
  user_id: angel.id, company_id: amazon.id, num_shares: 3
}

Stock.create(shares_angel_apple)
Stock.create(shares_angel_square)
Stock.create(shares_angel_amazon)

shares_kyle_apple = {
  user_id: kyle.id, company_id: apple.id, num_shares: 6
}
shares_kyle_square = {
  user_id: kyle.id, company_id: square.id, num_shares: 16
}

Stock.create(shares_kyle_apple)
Stock.create(shares_kyle_square)

shares_truong_apple = {
  user_id: truong.id, company_id: apple.id, num_shares: 6
}
shares_truong_square = {
  user_id: truong.id, company_id: square.id, num_shares: 2
}

Stock.create(shares_truong_apple)
Stock.create(shares_truong_square)

#-------------------------------#
#-------- WatchListItem --------#
#-------------------------------#

wlist_kyle_apple = { user_id: kyle.id, company_id: apple.id }
wlist_angel_amazon = { user_id: angel.id, company_id: amazon.id }
wlist_angel_sq = { user_id: angel.id, company_id: square.id }

WatchlistItem.create(wlist_kyle_apple)
WatchlistItem.create(wlist_angel_amazon)
WatchlistItem.create(wlist_angel_sq)
