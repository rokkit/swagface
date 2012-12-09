require 'spec_helper'

describe "tiles/edit" do
  before(:each) do
    @tile = assign(:tile, stub_model(Tile,
      :image => "MyString",
      :content => "MyText"
    ))
  end

  it "renders the edit tile form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => tiles_path(@tile), :method => "post" do
      assert_select "input#tile_image", :name => "tile[image]"
      assert_select "textarea#tile_content", :name => "tile[content]"
    end
  end
end
