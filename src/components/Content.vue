<template>
  <div>
    <bar :chartdata="seriesdata"></bar>
  </div>
</template>

<script>
  import Bar from './charts/BarChart.js';
  export default {
    name: 'Content',
    components: {
      Bar
    },
    data() {
      return {
        seriesdata: []
      }
    },
    mounted () {
      let self = this
      this.$http.get(`http://wb-predictivemaintenance-api.prsp7vkew2.eu-central-1.elasticbeanstalk.com/api/TorqueValues`).then((response) => {
        this.seriesdata = response.data;
      })
    }
  }
</script>