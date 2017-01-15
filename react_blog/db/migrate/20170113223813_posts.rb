class Posts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :content
      t.boolean :public
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
