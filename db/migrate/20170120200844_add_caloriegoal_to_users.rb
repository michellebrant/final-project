class AddCaloriegoalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :caloriegoal, :integer
  end
end
