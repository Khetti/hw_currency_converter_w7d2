import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      allRates: {},
      currency: {
        amount: null,
        firstSelected: null,
        secondSelected: null
      }
    },
    mounted() {
      this.fetchRates();
    },
    computed: {
      selectedConversion: function() {
        let result = (this.currency.amount * this.currency.firstSelected);
        return result.toFixed(2);
      },
      euroConversion: function() {
        let result = (this.currency.amount / this.currency.firstSelected);
        return result.toFixed(2);
      },
      nonEuroConversion: function() {
        let result = (this.currency.amount / this.currency.firstSelected);
        result = (result * this.currency.secondSelected);
        return result.toFixed(2);
      }
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
