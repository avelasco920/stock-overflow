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
  cash_value: 2387
)

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
  company_id: apple.id
)
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


WatchlistItem.create(
  user_id: angel.id,
  company_id: square.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: square.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: square.id
)
