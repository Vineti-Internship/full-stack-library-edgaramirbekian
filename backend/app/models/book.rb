class Book < ApplicationRecord
  belongs_to :writer

  validates :title, :category, :rating, :writer_id, presence: true
  validates :title, :uniqueness => true
  validates_numericality_of :rating, numericality: { only_integer: true }, :less_than_or_equal_to => 10

end
