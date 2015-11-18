class AddDeviseColumnsToUser < ActiveRecord::Migration
  def change 
  	change_table :users do |t|
  	t.string :state
  	t.string :city
  	t.string :phone_number
   end
  end
end