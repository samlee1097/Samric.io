class MessagesChannel < ApplicationCable::Channel
  def subscribed
      stop_all_streams
      @gameroom = Gameroom.find(params[:id])
      stream_for @gameroom
  end

  def receive(data)
    puts "#{data}"
    user = User.find_by(id: data['userId'])
    message = @gameroom.messages.create(content: data['content'], user: user)
    MessagesChannel.broadcast_to(@gameroom, MessageSerializer.new(message).serialized_json)
  end

  def unsubscribed
      stop_all_streams
  end
end
