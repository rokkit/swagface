require 'spec_helper'

describe "tiles/new" do
  before(:each) do
    assign(:tile, stub_model(Tile,
      :image => "MyString",
      :content => "MyText"
    ).as_new_record)
  end

  it "renders new tile form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => tiles_path, :method => "post" do
      assert_select "input#tile_image", :name => "tile[image]"
      assert_select "textarea#tile_content", :name => "tile[content]"
    end
  end
end
