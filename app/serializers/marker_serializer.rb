class MarkerSerializer < ActiveModel::Serializer
  attributes *(Marker.attribute_names - [])
end
