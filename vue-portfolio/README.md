# frontend

> Frontend part of my web application

## Build Setup

``` bash
#starting from

vue init webpack frontend
cd vue-portfolio
npm i -D webpack-cli
npm install node-sass sass-loader --save
npm install jquery --save
npm install vue-easy-slider --save

# install dependencies (first run)
npm install

# check and update dependencies
npm i -g npm-check-updates
ncu -u
npm update
npm install

# serve with hot reload at localhost:8081
npm start
npm run dev

# build for production with minification
npm run build
```

> Webpack:

	Per cambiare la porta su cui ascoltare: in config/index.js, sotto dev, cambiare il valore di port

> Vue Component:

	<script>
		props : sono le variabili che vengono passate quanto viene instanziato un componente. Esempio, ho un componente message, con title e body. <message title="Ciao" body="mondo"/>. Nel mio componente Message.vue, definisco props: ["title", "body"]
		data: in data mettiamo tutte le variabili che vogliamo controllare nello scope del nostro componente. In angular, è come definire all'inizio scope.variabile = "pippo"

		methods: in methods definiamo tutti i metodi che possono essere invocati (quindi sia da un elemento nel mio html sia all'interno di created, beforeCreated, beforeMounted, mounted, beforeDestroy, destroy)

		computed: in computed possiamo definire dei metodi simili a quelli presenti in methods, con la differenza che vengono scatenati automaticamente se il metodo in computed contiene una delle variabili definite in data ed essa viene modificata

	</script>

	<template>
		v-model: come ng-model
	
		v-on:change, v-on:click, v-on:blur : come ng-change, ng-click
		v-bind: serve per rendere dinamico un attributo di un tag html: <img v-bind:src="image"> oppure <img :src="image">
	</template>
