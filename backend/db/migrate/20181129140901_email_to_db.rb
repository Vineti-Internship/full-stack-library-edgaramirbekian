class EmailToDb < ActiveRecord::Migration[5.2]
  def change
    change_table :writers do |t|
      t.string :email, null: false, default: ""
    end
  end
end
