<template>
  <div class='p-4 border-b-2 border-green text-green'>
    <section>
      <p>{{timer}}</p>
    </section>
    <nav>
      <h2 class='text-center text-4xl font-bold'>かずやん ブログ</h2>
      <div>
        <ul class='pt-8 flex justify-center text-lg uppercase'>
          <li
            class='px-6 transition duration-300 opacity-75 hover:opacity-100'
          >
            <router-link to='/'>Home</router-link>
          </li>
          <li
            class='px-6 transition duration-300 opacity-75 hover:opacity-100'
          >
            <router-link to='/article/1'>Tag</router-link>
          </li>
          <li
            class='px-6 transition duration-300 opacity-75 hover:opacity-100'
          >
            <a href='https://github.com/kazuki-komori' target='_blank'>github</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: new Date(),
      nav: {
        type: 'home'
      }
    }
  },
  computed: {
    timer() {
      return this.time
    },
  },
  methods: {
    refresh() {
      this.time = new Date()
      const self = this
      setTimeout(() => { self.refresh() }, 1000)
    }
  },
  created: function () {
    this.refresh()
  }
}
</script>
<style>
</style>
