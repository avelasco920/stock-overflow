class ChangeCompanyBodyDatatype < ActiveRecord::Migration[5.1]
  def up
    change_column :companies, :biography, :string
  end

  def down
    change_column :companies, :biography, :text
  end
end
