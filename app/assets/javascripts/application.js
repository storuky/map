//= require jquery
//= require leaflet
//= require prune_cluster
//= require_self
//= require_tree .

var map = L.map('map').setView([54.76267040025495,37.37548828125], 8),
    leafletView = new PruneClusterForLeaflet();

map.options.crs = L.CRS.EPSG3395;

L.Icon.Default.imagePath = "/leaflet";
L.tileLayer(
  'http://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU', {
    subdomains: ['01', '02', '03', '04'],
    attribution: '<a http="yandex.ru" target="_blank">Яндекс</a>',
    reuseTiles: true,
    updateWhenIdle: false,
    zoomControl: false,
    maxNativeZoom: 17
  }
).addTo(map);

jQuery.getJSON("/markers.json", {}, function(res){
  res.forEach(function (item) {
    leafletView.RegisterMarker(new PruneCluster.Marker(item[1], item[2], {id: item[0]}));
  });
  map.addLayer(leafletView);
})

leafletView.PrepareLeafletMarker = function (marker, data) {
  marker.on('click', function () {
    jQuery.ajax({
      url: "/markers/"+data.id
    }).done(function (res) {
      marker.bindPopup(res);
      marker.openPopup();
    })
  })
}
