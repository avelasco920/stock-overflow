# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
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
  validates :session_token, :password_digest, :contact_number,
            :stocks_value, :cash_value, :portfolio_value,
            presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token, :calculate_portfolio

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(password_diget).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def calculate_cash_value
    self.cash_value = self.portfolio_value - 15
  end

  def process_stock_value
    # self.stocks_value ||= return 15
  end

  def calculate_portfolio
     # replace stock value
     # process_stock_value
    self.stocks_value = 15
    calculate_cash_value
  end

end
