class AddCarbgoalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :carbgoal, :integer
  end
end
