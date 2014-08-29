class Product < ActiveRecord::Base
  belongs_to :user
  has_many :reviews

  def to_s
    "#{name}"
  end
end
