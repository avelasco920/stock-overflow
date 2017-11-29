require 'test_helper'

class Api::NewsarticlesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_newsarticles_show_url
    assert_response :success
  end

  test "should get index" do
    get api_newsarticles_index_url
    assert_response :success
  end

end
