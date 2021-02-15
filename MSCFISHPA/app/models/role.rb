class Role < ApplicationRecord
    belongs_to: :member, class_name: Member
end
