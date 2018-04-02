<template>
	<div class="slider-content">
		<slider animation="fade">
		  <slider-item v-for="(image, index) in list" :key="index">
		    <div>
		      <img class="mySlides" :src="image.src">
		    </div>
		  </slider-item>
		</slider>
	</div>
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
	data() {
		return {
			"list" : [
				{
					"src" : "../../img/code.jpg"
				}
			]
		}
	},
	components: {
		Slider,
		SliderItem
	}
}
	
</script>
<style lang="scss">
	
	@media (max-width: 700px) {
	    .mySlides {
			height: 250px !important;
		}

		.slider {
			height: 250px;
		}
	}

	@media (max-width: 450px) {
	    .mySlides {
			height: 150px !important;
		}

		.slider {
			height: 150px;
		}
	}

	.mySlides {
		width:100%;
		height: 302px;
	}
</style>