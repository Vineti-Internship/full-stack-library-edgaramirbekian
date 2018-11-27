class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :rating, :writer_id
end
