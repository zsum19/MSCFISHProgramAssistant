require 'rails_helper'

# Unit Testing for member model
RSpec.describe Member, type: :model do
  it 'does not save an member without any arguments' do
    member = described_class.new
    expect(member).not_to be_valid
  end

  it 'does not save an member without name' do
    member = described_class.new(name: nil, num_referrals: 1, role_id: 1)
    expect(member).not_to be_valid
  end

  it 'does not save an member without num referrals' do
    member = described_class.new(name: 'test', num_referrals: nil, role_id: 1)
    expect(member).not_to be_valid
  end

  it 'does not save an member without role id' do
    member = described_class.new(name: 'test', num_referrals: 1, role_id: nil)
    expect(member).not_to be_valid
  end

  it 'saves an member with valid attributes' do
    member = described_class.new(name: 'test', num_referrals: 1, role_id: 1)
    expect(member).to be_valid
  end
end