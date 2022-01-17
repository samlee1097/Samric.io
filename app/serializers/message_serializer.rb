class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :gameroom_id
end
