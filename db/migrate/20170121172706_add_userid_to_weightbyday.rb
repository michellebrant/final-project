class AddUseridToWeightbyday < ActiveRecord::Migration[5.0]
  def change
    add_column :weightbydays, :userid, :integer
  end
end
