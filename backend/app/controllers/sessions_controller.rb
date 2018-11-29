class SessionsControler < ApplicationController

    # POST /sessions
    def create
        @writer = Writer.where(email: params[:email]).first

        if @writer.valid_password(params[:password])
            render json: writer
        else
            head(:unauthorized)
        end

    end

    # DELETE /sessions/id
    def destroy

    end

end