# Vue.js / Webpack / Docker / NginX 
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/kodi/esta/vue-webpack-docker-nginx)
[![HitCount](http://hits.dwyl.com/kodi/vue-webpack-docker-nginx.svg)](http://hits.dwyl.com/kodi/vue-webpack-docker-nginx)



## Overview

This repository contains everythings you need to create and run a docker container for a vue webapplication


<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" width="64px"/>
    <br>
    Vue.js is used as main Frontend framework, project was bootstraped using `vue-cli` and using Vue.js version `2.5.2`
</div>
<hr/>
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Webpack.png" width="64px"/> 3.6.0
    <br/>
    We use Webpack to bundle and build everything into static html file that is ready to be served via Docker
</div>
<hr/>
<div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png" height="54px"/>
    <br/>
    We use docker to package static html, js and css files and serve them via Nginx inside of docker. For best performance we use lightweight <a href="https://alpinelinux.org/">Alpine</a> linux
</div>
<hr/>

<div>
    Nginx will serve static content from within a docker
</div>

<hr/>


### Requirements

You should have following sowftare installed on your machine:

- Node
- Npm
- Docker

## frontend creation

npm install -g vue-cli
vue init webpack frontend
cd frontend/
npm install node-sass sass-loader --save
npm install


## Docker build for production

in frontend/
	- create server.js file like the example
	- in package.json
		- edit "start" script to "start": "node server.js",

Go to the project root and run this command


> See it in action here


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Q9br0Db8LOI/0.jpg)](https://www.youtube.com/watch?v=Q9br0Db8LOI)





## Local, non-docker watcher and builds

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

