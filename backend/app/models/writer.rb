class Writer < ApplicationRecord
    acts_as_token_authenticatable
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable,
            :recoverable, :rememberable, :validatable
    has_many :books, dependent: :destroy

    validates :first_name, :last_name, :password, presence: true
    # validates :email, :uniqueness => true
end
