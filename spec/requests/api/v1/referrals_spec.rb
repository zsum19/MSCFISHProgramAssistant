require 'rails_helper'

RSpec.describe "Api::V1::Referrals", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/referrals/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/api/v1/referrals/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/api/v1/referrals/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/api/v1/referrals/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
