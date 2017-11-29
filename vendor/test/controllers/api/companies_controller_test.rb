require 'test_helper'

class Api::CompaniesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_companies_show_url
    assert_response :success
  end

  test "should get index" do
    get api_companies_index_url
    assert_response :success
  end

  test "should get update" do
    get api_companies_update_url
    assert_response :success
  end

end
