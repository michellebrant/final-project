class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :height
      t.string :weight
      t.integer :log_id

      t.timestamps
    end
  end
end


