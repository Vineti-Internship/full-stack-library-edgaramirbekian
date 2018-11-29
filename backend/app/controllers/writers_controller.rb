class WritersController < ApplicationController
  before_action :set_writer, only: [:show, :update, :destroy]

  # GET /writers
  def index
    @writers = Writer.all

    render json: @writers
  end

  # GET /writers/1
  def show
    render json: @writer
  end

  # POST /writers
  def create
    @writer = Writer.new(writer_params)

    if @writer.save
      render json: @writer, status: :created, location: @writer
    else
      render json: @writer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /writers/1
  def update
    if @writer.update(writer_params)
      render json: @writer
    else
      render json: @writer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /writers/1
  def destroy
    @writer.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_writer
      @writer = Writer.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def writer_params
      params.require(:writer).permit(:first_name, :last_name, :password, :email)
    end
end
