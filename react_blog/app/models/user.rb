class User < ApplicationRecord
  has_secure_password
  has_many :posts

  validates :username, :password, presence: true
end
