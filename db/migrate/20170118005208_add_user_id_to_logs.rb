class AddUserIdToLogs < ActiveRecord::Migration[5.0]
  def change
    add_column :logs, :user_id, :integer
  end
end
