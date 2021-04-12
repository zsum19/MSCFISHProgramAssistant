require 'rails_helper'
RSpec.describe "Sessions" do
  it "signs user in and out" do
    member = Member.create(first_name: 'test1', last_name: 'test1', email: 'test@test.com', role_id: '1')
    sign_in member
    get root_path
    # expect(response).to render_template(:index)
    
    sign_out member
    get root_path
    # expect(response).not_to render_template(:index)
  end
end