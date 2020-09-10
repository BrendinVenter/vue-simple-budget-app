export default {
  methods: {
    formatMoney(amount) {
      let dollar = amount / 100
      let sign = '$ '

      if (dollar < 0) {
        sign = '-$ '
        dollar *= -1
      }

      return sign + dollar.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
}
