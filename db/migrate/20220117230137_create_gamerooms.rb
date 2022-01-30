class CreateGamerooms < ActiveRecord::Migration[6.1]
  def change
    create_table :gamerooms do |t|
      t.text :key

      t.timestamps
    end
  end
end
