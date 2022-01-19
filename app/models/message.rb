class Message < ApplicationRecord
   belongs_to :user
   belongs_to :gameroom

   validates :content, presence: true
end
