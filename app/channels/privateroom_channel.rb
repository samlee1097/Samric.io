class PrivateroomChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    @gameroom = Gameroom.find(params[:id])
    stream_for @gameroom
  end

  def receive(data)
    user = User.find_by(id: data['userId'])
  end

  def unsubscribed
      stop_all_streams
  end
end
