export default {
  computed: {
    dateTime() {
      return (time) => {
        const day = new Date(time)
        return `${day.getFullYear()}.${day.getMonth() + 1}.${day.getDate()}`
      }
    },
    readTime() {
      return (time) => {
        return Math.ceil(time)
      }
    }
  }
}
