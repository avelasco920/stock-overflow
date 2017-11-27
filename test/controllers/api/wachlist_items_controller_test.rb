require 'test_helper'

class Api::WachlistItemsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_wachlist_items_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_wachlist_items_destroy_url
    assert_response :success
  end

end
