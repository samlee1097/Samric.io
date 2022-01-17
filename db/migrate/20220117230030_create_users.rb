class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :avatar
      t.integer :points

      t.timestamps
    end
  end
end
