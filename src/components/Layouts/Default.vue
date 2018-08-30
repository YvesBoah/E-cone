<template>
  <div class="Default">


    <!-- Importation du Header Haut -->
      <Header/>  
    <!-- Importation du Header Haut -->


    <!-- Transition Sur toutes les pages concernées -->
 <transition name="slide-fade">

          <slot/>
</transition>
    <!-- Transition Sur toutes les pages concernées -->




    <!-- Importation du Footer En Bas -->
        <Footer/>
    <!-- Importation du Footer En Bas -->




  </div>
</template>

<script>
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
export default {
  name: 'Default',
  data: function () {
    return {
      
    }
  },
  methods: {
  
  }
}
</script>
<style>
	/*Spinner*/
.load{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);
  /*change these sizes to fit into your project*/
  width:100px;
  height:100px;
}
.load hr{border:0;margin:0;width:40%;height:40%;position:absolute;border-radius:50%;animation:spin 2s ease infinite}

.load :first-child{background:#19A68C;animation-delay:-1.5s}
.load :nth-child(2){background:#F63D3A;animation-delay:-1s}
.load :nth-child(3){background:#FDA543;animation-delay:-0.5s}
.load :last-child{background:#193B48}

@keyframes spin{
  0%,100%{transform:translate(0)}
  25%{transform:translate(160%)}
  50%{transform:translate(160%, 160%)}
  75%{transform:translate(0, 160%)}
}
/*Spinner*/

/*Transition*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/*Transition*/
</style>


