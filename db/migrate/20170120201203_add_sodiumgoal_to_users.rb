class AddSodiumgoalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sodiumgoal, :integer
  end
end
