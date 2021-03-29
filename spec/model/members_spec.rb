require 'rails_helper'

# Unit Testing for member model
RSpec.describe Member, type: :model do
  it 'does not save an member without any arguments' do
    member = described_class.new
    expect(member).not_to be_valid
  end

  it 'does not save an member without first name' do
    member = described_class.new(first_name: nil, last_name: 'test', email: 'test@test.com', num_referrals: 1, role_id: 1)
    expect(member).not_to be_valid
  end

  it 'does not save an member without last name' do
    member = described_class.new(first_name: 'test', last_name: nil, email: 'test@test.com', num_referrals: 1, role_id: 1)
    expect(member).not_to be_valid
  end

  it 'does not save an member without email' do
    member = described_class.new(first_name: 'test', last_name: 'test', email: nil, num_referrals: 1, role_id: 1)
    expect(member).not_to be_valid
  end

  it 'does not save an member without num referrals' do
    member = described_class.new(first_name: 'test', last_name: 'test', email: 'test@test.com', num_referrals: nil, role_id: 1)
    expect(member).not_to be_valid
  end

  it 'does not save an member without role id' do
    member = described_class.new(first_name: 'test', last_name: 'test', email: 'test@test.com', num_referrals: 1, role_id: nil)
    expect(member).not_to be_valid
  end

  it 'saves an member with valid attributes' do
    member = described_class.new(first_name: 'test', last_name: 'test', email: 'test@test.com', num_referrals: 1, role_id: 1)
    expect(member).to be_valid
  end
end