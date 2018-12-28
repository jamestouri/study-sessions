class Post < ApplicationRecord
  validates :body, :name, presence: true

  has_many :comments,
  foreign_key: :post_id,
  class_name: :Comment,
  dependent: :destroy

end
