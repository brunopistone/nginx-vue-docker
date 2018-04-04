<template>
	<div class="responsive-navigation">
        <a class="menu-toggle-btn" @click="showHide()">
	    	<i class="fa fa-bars fa-2x"></i>
        </a>
        <div class="navigation responsive-menu" :class="{ showdropdown: navmenu }">
            <ul>
            	<li class="about">
	                <a @click="scrollMeTo('about')">ABOUT ME</a>
	            </li>
	            <li class="skills">
	                <a @click="scrollMeTo('skills')">SKILLS</a>
	            </li>
	            <li class="portfolio">
	                <a @click="scrollMeTo('resume')">RESUME</a>
	            </li>
	            <li class="contact">
	                <a @click="scrollMeTo('contact')">CONTACT</a>
	            </li>
            </ul>
        </div>
    </div>
</template>
<script>
	export default {
		data() {
			return {
				"navmenu" : false
			};
		},
		methods : {
			scrollMeTo(refName) {
				var reqId = "#"+refName;
    			window.scrollTo(0, $(reqId).offset().top-85);
			},
			showHide() {
				this.navmenu = !this.navmenu;
			}
		}
	}
</script>
<style lang="scss">
	.responsive-navigation {
	    position: relative;
	    width: 100%;
	    z-index: 9999;
	}

	a.menu-toggle-btn {
	    width: 100%;
	    height: 60px;
	    background-color: #38a9e3;
	    text-align: center;
	    line-height: 60px;
	    display: block;
	    color: white;
	}

	.responsive-menu {
	    display: none;
	    background-color: #495054;
	}

	.responsive-menu ul {
		padding: 0;
	    margin: 0;
	    list-style: none;
	}

	.showdropdown {
		display: block;
	}

	.responsive-menu ul li a {
	    color: white;
	    text-transform: uppercase;
	    display: block;
	    padding: 20px;
	    border-bottom: 1px solid #5a6267;
	}
</style>