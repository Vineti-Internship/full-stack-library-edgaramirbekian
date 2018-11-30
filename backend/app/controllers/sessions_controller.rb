class SessionsController < ApplicationController

    # POST /sessions
    def create
        @writer = Writer.where(email: params[:email]).first
                
        if @writer&.valid_password?(params[:password])
            render json: @writer
        else
            head(:unauthorized)
        end
    end

    # DELETE /sessions/id
    def destroy
        current_user.authentication_token = nil
    end

    def session_params
        params.require(:session).permit( :email, :password)
    end

end