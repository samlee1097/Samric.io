class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :points
end
