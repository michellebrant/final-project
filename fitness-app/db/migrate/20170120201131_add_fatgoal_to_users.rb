class AddFatgoalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :fatgoal, :integer
  end
end
