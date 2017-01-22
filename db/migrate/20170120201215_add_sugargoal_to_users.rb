class AddSugargoalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :sugargoal, :integer
  end
end
