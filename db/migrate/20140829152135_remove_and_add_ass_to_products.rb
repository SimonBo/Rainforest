class RemoveAndAddAssToProducts < ActiveRecord::Migration
  def change
    remove_column :products, :user_id
    add_column :products, :user_id, :integer,  index: true
  end
end
