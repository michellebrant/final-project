class AddUserIdToAuthorization < ActiveRecord::Migration[5.0]
  def change
    add_column :authorizations, :user_id, :string
  end
end
