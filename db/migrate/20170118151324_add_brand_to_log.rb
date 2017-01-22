class AddBrandToLog < ActiveRecord::Migration[5.0]
  def change
    add_column :logs, :brand, :string
  end
end
