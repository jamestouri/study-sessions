@comments.each do |comment|
  json.extract! comment, :id, :text
end
