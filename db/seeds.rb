100000.times do |num|
  FactoryGirl.create(:marker)
  ap "#{num}"
end