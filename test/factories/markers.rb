FactoryGirl.define do
  factory :marker do
    lat {Faker::Address.latitude}
    lng {Faker::Address.longitude}
    avatar {Faker::Avatar.image}
    name {Faker::Name.name}
    website {Faker::Internet.url}
    email {Faker::Internet.email}
    city {Faker::Address.city}
    address {Faker::Address.street_address}
    about {Faker::Hipster.paragraph}
    phone {Faker::PhoneNumber.cell_phone}
  end
end
