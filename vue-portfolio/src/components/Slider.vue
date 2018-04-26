<template>
	<div class="slider-content">
		<slider animation="fade">
		  <slider-item v-for="(image, index) in list" :key="index">
		    <div class="image-container">
		      <img class="mySlides" :src="image.src">
		      <div class="centered">
		      	<h2>{{image.title}}</h2>
		      	<p>{{image.content}}</p>
		      </div>
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
					"src" : "static/img/code.jpg",
					"title" : "Software Developer",
					"content" : "I have a large interest in programming and I love to apply my skills to my personal projects. Fond of data engineering, full stack development and machine learning" 
				},
				{
					"src" : "static/img/calcio.jpg",
					"title" : "Sport fun",
					"content" : "I played football since I was 5 years old to 18. Actually I'm a follower of football, tennis and basket"
				},
				{
					"src" : "static/img/collage.png",
					"title" : "Life lover",
					"content" : "I spend my free time with my friends, that are really my life. I like going out to know new people, drink gin tonics and have fun"
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
<style>

	@media (min-width: 700px) {
	    .slider {
			height: 502px !important;
		}
	}
	
	@media (max-width: 700px) {
	    .mySlides {
			height: 350px !important;
		}

		.slider {
			height: 350px !important;
		}

		.centered h2 {
			font-size: 38px !important;
		}

		.centered p {
			font-size: 10px !important;
		}
	}

	@media (max-width: 450px) {
	    .mySlides {
			height: 150px !important;
		}

		.slider {
			height: 150px !important;
		}

		.centered h2 {
			font-size: 28px important;
		}

		.centered p {
			font-size: 10px important;
		}
	}

	.mySlides {
		width:100%;
		height: 502px;
	}

	.container {
	    position: relative;
	    text-align: center;
	    color: white;
	}

	.centered {
	    position: absolute;
	    width: 100%;
	    top: 70%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	}

	.centered h2 {
		font-size: 48px;
	    text-transform: uppercase;
	    font-weight: 800;
	    margin-bottom: 30px;
	    color: white;
	    text-align: center;
	}

	.centered p {
		font-size: 16px;
	    text-transform: uppercase;
	    letter-spacing: 2px;
	    width: 50%;
	    margin: 0 auto 30px auto;
	    line-height: 1.8em;
	    color: white;
	    text-align: center;
	}
</style>