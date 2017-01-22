class CreateWeightbydays < ActiveRecord::Migration[5.0]
  def change
    create_table :weightbydays do |t|
      t.integer :weight
      t.string :day

      t.timestamps
    end
  end
end
