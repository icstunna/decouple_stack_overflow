class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.belongs_to :question
      t.string :title
      t.string :content
      t.integer :vote_count, default: 0

      t.timestamps null: false
    end
  end
end
