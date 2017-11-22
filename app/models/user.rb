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
#  stocks_value    :integer          not null
#  cash_value      :integer          not null
#  portfolio_value :integer          not null
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
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token, :calculate_portfolio_value

  has_many :watchlist_items
  has_many :stocks
  has_many :invested_companies,
            through: :shares,
            source: :company
  has_many :watched_companies,
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

  def individual_stock_value(company, num_shares)
    company.market_price * num_shares
  end

  def set_stocks_value
    stocks_value = 0
    self.stocks.each do |stock|
      stocks_value += individual_stock_value(stock.company, stock.num_shares)
    end
    self.stocks_value = stocks_value
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
