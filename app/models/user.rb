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
            :img_url, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)

  end

  def 

end
