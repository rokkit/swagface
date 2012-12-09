class CreateTiles < ActiveRecord::Migration
  def change
    create_table :tiles do |t|
      t.string :image
      t.text :content

      t.timestamps
    end
  end
end
