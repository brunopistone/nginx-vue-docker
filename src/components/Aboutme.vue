<template>
	<div class="member-item">
		<div class="member-thumb">
			<img src="static/img/myphoto.jpg" alt="profile">
			<div class="overlay">
				<ul class="social-member">
					<li><a target="_blank" href="https://github.com/bp91" class="fa fa-github"></a></li>
					<li><a target="_blank" href="https://it.linkedin.com/pub/bruno-pistone/b9/169/954" class="fa fa-linkedin"></a></li>
				</ul>
			</div>
		</div>
		<div class="member-content">
			<h4>I'm on <a href="https://github.com/bp91" id="simple_link">Github</a> and <a href="https://it.linkedin.com/pub/bruno-pistone/b9/169/954" id="simple_link">LinkedIn</a>!</h4>
			<p>Check them out</p>
		</div>
	</div>
</template>
<script>
	
</script>
<style type="scss">
	.member-item {
	    overflow: hidden;
	    height: auto;
	}

	.member-thumb {
	    width: 100%;
	    overflow: hidden;
	    height: auto;
	    position: relative;
	}

	.member-thumb img {
	    width: 100%;
	    height: 100%;
	}

	.member-thumb .overlay {
	    position: absolute;
	    top: 0;
	    right: 0;
	    opacity: 0;
	    visibility: hidden;
	    width: 100%;
	    height: 100%;
	    background-color: rgba(0, 0, 0, 0.6);
	}

	.social-member {
		padding: 0;
    	margin: 0;
    	list-style: none;
	}

	.social-member li {
	    display: inline;
	    float: left;
	    width: 40px;
	    height: 40px;
	    background-color: #e9b144;
	    text-align: center;
	    margin-right: 1px;
	}

	*, *:before, *:after {
	    -moz-box-sizing: border-box;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	}

	.member-content {
	    margin-top: 10px;
	    overflow: hidden;
	    text-align: center;
	}

	.member-content h4 {
	    text-transform: uppercase;
	    font-size: 18px;
	    color: #e9b144;
	}

	.member-content p {
	    color: #aaaaaa;
	    font-size: 12;
	}
</style>