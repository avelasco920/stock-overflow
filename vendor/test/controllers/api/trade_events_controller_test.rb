require 'test_helper'

class Api::TradeEventsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_trade_events_create_url
    assert_response :success
  end

  test "should get index" do
    get api_trade_events_index_url
    assert_response :success
  end

end
