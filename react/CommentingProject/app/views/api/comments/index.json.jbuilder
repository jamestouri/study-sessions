@comments.each do |comment|
  json.set! comment.id do
    json.extract! 'comment', comment: comment
  end
end
