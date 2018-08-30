<template>
  <div class="Acceuil">

  	<h1>Lorem</h1>

  	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<div class="container">
	<div class="row">
		<div class="col-md-2">
           <clazy-load src="https://unsplash.it/500">
              <!-- <img :src="url_image+'/a.png'" > -->
              <img src="static/a.png">
              <div class="preloader" slot="placeholder">
                <div class="load">
                <hr/><hr/><hr/><hr/>
              </div>

              </div>
    </clazy-load>
    </div>

    <div class="col-md-8">
           <div>
    <flip-countdown deadline="2018-09-31 00:00:00"></flip-countdown>
  </div>
    </div>
	</div>
</div>

  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
  name: 'Acceuil',
  data: function () {
    return {
      
    }
  },
  methods: {
  
  },
  components: {
    VueClazyLoad, FlipCountdown
  }
}
</script>


