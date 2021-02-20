class Role < ApplicationRecord
    has_many :member, class_name: Member
end
