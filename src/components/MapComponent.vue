<template>
  <div>
    <div ref="map" style="height: 400px;"></div>
  </div>
</template>

<script>
export default {
  name: 'MapComponent',
  props: ['position', 'name'],
  mounted() {
    window.addEventListener('load', this.initMap);
  },
  methods: {
    initMap() {
      // The map, centered at Uluru
      const map = new google.maps.Map(this.$refs.map, { 
        zoom: 14,
        center: this.position,
        mapId: "DEMO_MAP_ID",
      });

      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
        map: map,
        position: this.position,
        title: this.name,
      });

      marker.addListener("click", () => {
        // Constructing the Google Maps URL with the marker's coordinates
        const mapsUrl = `https://www.google.com/maps?q=${marker.getPosition().lat()},${marker.getPosition().lng()}`;

        // Opening Google Maps in a new tab/window
        window.open(mapsUrl, "_blank");
      });
    }
  }
};
</script>
