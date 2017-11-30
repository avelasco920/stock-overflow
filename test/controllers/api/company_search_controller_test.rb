require 'test_helper'

class Api::CompanySearchControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_company_search_index_url
    assert_response :success
  end

end
