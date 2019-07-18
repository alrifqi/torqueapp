import { Line, mixins, Bar } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata)
  }
}