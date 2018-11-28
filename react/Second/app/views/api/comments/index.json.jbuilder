@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :text
  end
end
