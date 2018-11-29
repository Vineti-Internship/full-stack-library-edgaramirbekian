class WriterSerializer < ActiveModel::Serializer
  has_many :books
  attributes :id, :first_name, :last_name, :encrypted_password

end
