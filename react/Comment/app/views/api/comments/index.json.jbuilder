@comments.each do |comment|
  json.set! do comment.id
    json.extract! 'comment', comment: comment
  end
end 
