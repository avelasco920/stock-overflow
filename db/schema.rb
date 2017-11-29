# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171129075156) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.string "name", null: false
    t.string "symbol", null: false
    t.float "market_price"
    t.string "biography"
    t.string "ceo"
    t.integer "founding_year"
    t.integer "employees"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_companies_on_name", unique: true
    t.index ["symbol"], name: "index_companies_on_symbol", unique: true
  end

  create_table "news_articles", force: :cascade do |t|
    t.string "publisher", null: false
    t.string "title", null: false
    t.text "body", null: false
    t.datetime "date", null: false
    t.string "img_url", null: false
    t.string "source", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "company_id"
    t.integer "views"
    t.index ["date"], name: "index_news_articles_on_date"
    t.index ["publisher"], name: "index_news_articles_on_publisher"
    t.index ["title"], name: "index_news_articles_on_title", unique: true
  end

  create_table "stocks", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.integer "num_shares", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "company_id"], name: "index_stocks_on_user_id_and_company_id", unique: true
  end

  create_table "trade_events", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "trade_type", null: false
    t.integer "num_shares", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "contact_number"
    t.float "stocks_value", null: false
    t.float "cash_value", null: false
    t.float "portfolio_value", null: false
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "watchlist_items", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "company_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "company_id"], name: "index_watchlist_items_on_user_id_and_company_id", unique: true
  end

end
