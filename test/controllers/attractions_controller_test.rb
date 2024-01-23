require "test_helper"

class AttractionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @attraction = attractions(:one)
  end

  test "should get index" do
    get attractions_url, as: :json
    assert_response :success
  end

  test "should create attraction" do
    assert_difference("Attraction.count") do
      post attractions_url, params: { attraction: { completed: @attraction.completed, location: @attraction.location, name: @attraction.name, park: @attraction.park, type: @attraction.type } }, as: :json
    end

    assert_response :created
  end

  test "should show attraction" do
    get attraction_url(@attraction), as: :json
    assert_response :success
  end

  test "should update attraction" do
    patch attraction_url(@attraction), params: { attraction: { completed: @attraction.completed, location: @attraction.location, name: @attraction.name, park: @attraction.park, type: @attraction.type } }, as: :json
    assert_response :success
  end

  test "should destroy attraction" do
    assert_difference("Attraction.count", -1) do
      delete attraction_url(@attraction), as: :json
    end

    assert_response :no_content
  end
end
