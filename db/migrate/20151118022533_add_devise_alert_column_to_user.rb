class AddDeviseAlertColumnToUser < ActiveRecord::Migration
  def change
    add_column :users, :alert, :boolean
  end
end
