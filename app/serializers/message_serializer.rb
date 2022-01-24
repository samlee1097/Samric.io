class MessageSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :content, :user_id, :gameroom_id
  belongs_to :gameroom
  belongs_to :user
end
