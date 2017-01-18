class CreateLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :logs do |t|
      t.string :day
      t.string :food_name
      t.integer :calories
      t.integer :cal_from_fat
      t.integer :protein
      t.integer :fat
      t.integer :sat_fat
      t.integer :sodium
      t.integer :sugar
      t.integer :carbs
      t.integer :servings
      t.string :meal

      t.timestamps
    end
  end
end
