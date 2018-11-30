class WriterSerializer < ActiveModel::Serializer
  has_many :books
  attributes :id, :first_name, :last_name, :password, :email, :authentication_token

end
