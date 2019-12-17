import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      allRates: [],
      currencyAmount: 0
    },
    mounted() {
      this.fetchRates();
    },
    methods: {
      fetchRates: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then((rates) => {
          this.allRates = rates
        });
      }
    }
  });
});
