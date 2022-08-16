<template>
   
   <div class="container">

      <div class="row">
      
         <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group" v-for="country in countries" :key="country">
               <router-link :to="`/list/${country.alpha3Code}`" class="list-group-item list-group-item-action">
                  <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`" />
                  <p>{{ country.name.common }}</p>
               </router-link>

            </div>
         </div>
      </div>
   </div>
   <router-view />

</template>

<script>
// import CountriesDetails from '../pages/CountriesDetails.vue'
import axios from 'axios'

export default {
   name: "CountriesList",
   data(){
      return{
         countries: null,
      }
   },
   // props: {
   //    countries: Object,
   // },
   // components: { CountriesDetails },

   mounted(){
      axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then(({data}) => (this.countries = data))
   },
}
</script>

<style>

</style>