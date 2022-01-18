class Message < ApplicationRecord
   belongs_to :user
   belongs_to :gameroom
end
