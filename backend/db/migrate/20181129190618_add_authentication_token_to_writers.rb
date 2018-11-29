class AddAuthenticationTokenToWriters < ActiveRecord::Migration[5.2]
  def change
    add_column :writers, :authentication_token, :string, limit: 30
    add_index :writers, :authentication_token, unique: true
  end
end
