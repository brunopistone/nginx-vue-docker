<template>
	<div class="google-map" :id="mapName"></div>
</template>
<script>
	export default {
		name : "google-map",
		data() {
			return {
				mapName: this.name + "-map"
			};
		},
		mounted: function () {
			const element = document.getElementById(this.mapName)
			const options = {
				zoom: 14,
				center: new google.maps.LatLng(45.4641013,9.1897378)
			}
			const map = new google.maps.Map(element, options);
		}
	}
</script>
<style lang="scss">
	.google-map {
	  height: 300px;
	  margin: 0 auto;
	  background: gray;
	}
</style>