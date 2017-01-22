class AddGoalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :goal, :string
  end
end
