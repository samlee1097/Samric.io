class UsersController < ApplicationController

   def index
      render json: User.all, status: :ok
   end

   def show
      user = User.find_by(id: params[:id])
      if user
         render json: user, status: :ok
      else
         render json: {errors: "User not found :^("}, status: :not_found
      end
   end

   def create
      new_user = User.create(user_params)
      if new_user.valid?
         render json: new_user, status: :created
      else
         render json: {errors: new_user.errors.full_messages}, status: :unprocessable_entity
      end
   end

   def destroy
      user = User.find_by(id: params[:id])
      if user
         user.destroy
         head :no_content
      else
         render json: {errors: "User not found :^("}, status: :not_found
      end
   end

   private

   def user_params
      params.permit(:name, :avatar, :points, :isDrawing, :isLeader)
   end

end
