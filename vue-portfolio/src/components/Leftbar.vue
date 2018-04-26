<template>
	<div class="row hide-leftmenu">
		<div class="col-xs-12">
			<nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
		        <ul class="nav sidebar-nav">
		        	<li id="description-li">
		        		<div class="description-container">
		        			<div class="row">
		        				<div class="col-xs-1">
		        				</div>
		        				<div class="col-xs-10">
		        					<span id="name">
		        						Bruno Pistone
		        					</span>
		        				</div>
		        				<div class="col-xs-1">
		        				</div>
		        			</div>
		        			<div class="row">
		        				<div class="col-xs-1">
		        				</div>
		        				<div class="col-xs-10">
		        					<span id="subtitle">
		        						Welcome to my portfolio website
		        					</span>
		        				</div>
		        				<div class="col-xs-1">
		        				</div>
		        			</div>
						</div>
		        	</li>
		            <li class="menu-li">
		                <a id="aboutme" @click="scrollMeTo('about')">ABOUT ME</a>
		            </li>
		            <li class="menu-li">
		                <a id="skill" @click="scrollMeTo('skills')">SKILLS</a>
		            </li>
		            <li class="menu-li">
		                <a id="myresume" @click="scrollMeTo('resume')">RESUME</a>
		            </li>
		            <li class="menu-li">
		                <a id="contacts" @click="scrollMeTo('contact')">CONTACT</a>
		            </li>
		        </ul>
		    </nav>
		</div>
	</div>
</template>

<script>
	export default {
		methods : {
			scrollMeTo(refName) {
				var reqId = "#"+refName;
    			window.scrollTo(0, $(reqId).offset().top-85);
			}
		}
	}
</script>

<style>

	ul.nav {
		width: 100%;
	}
	
	.description-container {
		margin: 100px 0;
	    background-color: #38a9e3;
	    padding: 25px 0px;
		background-color: #38a9e3;
	}

	#description-li {
		margin-top: 100px;
		margin-bottom: 50px;
	}

	span#name {
		text-transform: uppercase;
		font-size: 27px;
		font-weight: 800;
		color: white;
	}

	span#subtitle {
		color: #bee3f6;
		font-size: 13px;
	}

	#sidebar-wrapper {
	    z-index: 1000;
	    left: 220px;
	    width: 23%;
	    height: 100%;
	    margin-left: -220px;
	    overflow-y: auto;
	    overflow-x: hidden;
	    background: #495054;
	    color: white;
	}

	#sidebar-wrapper a {
    	color: white;
    }

    li.menu-li a {
    	text-align: center;
    	background-color: #383e41;
    	text-transform: uppercase;
    	padding: 15px 30px;
		border-left: 4px solid;
		transition: all 150ms ease-in;
		text-decoration: none;
    }

    li.menu-li a:hover {
    	background-color: #34393b;
    }

    li.menu-li a:focus {
    	background-color: #34393b;
    }

    li.menu-li a:active {
    	color: #38a9e3;
    }

    #home {
    	border-color: #38a9e3
    }

    #aboutme {
    	border-color: #e9b144;
    }

    #skill {
    	border-color: #974dea;
    }

    #myresume {
    	border-color: #38e395;
    }

    #contacts {
    	border-color: #e3387c;
    }
</style>