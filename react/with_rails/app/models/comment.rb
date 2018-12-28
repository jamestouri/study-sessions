class Comment < ApplicationRecord
  validates :text, presence: true

  belongs_to :post,
  primary_key: :post_id,
  foreign_key: :comment_id,
  class_name: :Post
end
