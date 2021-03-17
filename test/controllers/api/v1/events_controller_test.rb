# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class EventsControllerTest < ActionDispatch::IntegrationTest
      test 'should get index' do
        get api_v1_events_index_url
        assert_response :success
      end

      test 'should get create' do
        get api_v1_events_create_url
        assert_response :success
      end

      test 'should get show' do
        get api_v1_events_show_url
        assert_response :success
      end

      test 'should get destroy' do
        get api_v1_events_destroy_url
        assert_response :success
      end
    end
  end
end
