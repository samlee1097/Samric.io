class GameroomsController < ApplicationController
   
   def index
      render json: Gameroom.all, status: :ok
   end

   def show
      gameroom = Gameroom.find_by(id: params[:id])
      if gameroom
         render json: gameroom, status: :ok
      else
         render json: {errors: "Gameroom not found :^("}, status: :not_found
      end
   end

   def create
      new_gameroom = Gameroom.create(gameroom_params)
      if new_gameroom.valid?
         render json: new_gameroom, status: :created
      else
         render json: {errors: new_gameroom.errors.full_messages}, status: :unprocessable_entity
      end
   end

   def destroy
      gameroom = Gameroom.find_by(id: params[:id])
      if gameroom
         gameroom.destroy
         head :no_content
      else
         render json: {errors: "Gameroom not found :^("}, status: :not_found
      end
   end


   private

   def gameroom_params
      params.permit(:key)
   end
   
end
