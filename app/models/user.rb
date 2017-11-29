# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  contact_number  :string
#  stocks_value    :float            not null
#  cash_value      :float            not null
#  portfolio_value :float            not null
#  img_url         :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :session_token,
            :password_digest,
            :stocks_value,
            :cash_value,
            :portfolio_value,
            :first_name,
            :last_name,
            presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :cash_value, numericality: { greater_than: 0 }

  attr_reader :password
  after_initialize :ensure_session_token, :calculate_portfolio_value

  has_many :watchlist_items
  has_many :stocks
  has_many :trade_events
  has_many :invested_companies,
            through: :stocks,
            source: :company

  has_many :companies_watching,
            through: :watchlist_items,
            source: :company

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def increase_cash_value(value)
    self.cash_value += value
    self.save
    self.cash_value
  end

  def decrease_cash_value(value)
    self.cash_value -= value
    self.save
    self.cash_value
  end

  def set_stocks_value
    stocks_value = 0
    self.stocks.each do |stock|
      stocks_value += Stock.value(stock.company, stock.num_shares)
    end
    self.stocks_value = stocks_value.round(2)
    self.save
    self.stocks_value
  end

  def calculate_portfolio_value
    set_stocks_value
    self.portfolio_value = self.cash_value + self.stocks_value
    self.save
    self.portfolio_value
  end

end
