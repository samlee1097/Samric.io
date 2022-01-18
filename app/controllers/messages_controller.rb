class MessagesController < ApplicationController

   def index
      render json: Message.all, status: :ok
   end

   def show
      message = Message.find_by(id: params[:id])
      if message
         render json: message, status: :ok
      else
         render json: {errors: "Message not found :^("}, status: :not_found
      end
   end

   def create
      new_message = Message.create(message_params)
      if new_message.valid?
         render json: new_message, status: :created
      else
         render json: {errors: new_message.errors.full_messages}, status: :unprocessable_entity
      end
   end


   private

   def message_params
      params.permit(:content, :user_id, :gameroom_id)
   end

end
