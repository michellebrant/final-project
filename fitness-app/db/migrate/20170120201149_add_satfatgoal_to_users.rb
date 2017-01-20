class AddSatfatgoalToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :satfatgoal, :integer
  end
end
