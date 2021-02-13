<template>
  <div class='p-4 border-b-2 border-green text-green'>
    <section>
      <p class='md:text-xl text-sm pb-2'>{{timer}}</p>
    </section>
    <nav>
      <h2 class='text-center sm:text-4xl text-3xl font-bold'>かずやん Tech Blog</h2>
      <div>
        <ul class='grid grid-cols-6 pt-8 sm:grid-cols-8 text-center text-lg'>
          <li class='block col-span-3 sm:col-span-2'>
            <router-link to='/'>
              <span
                class='block w-full px-6 transition duration-300 opacity-75 hover:opacity-100'
              >
                  Home
              </span>
            </router-link>
          </li>
          <li class='col-span-3 sm:col-span-2'>
            <router-link to='/tags'>
              <span
                class='block w-full px-6 transition duration-300 opacity-75 hover:opacity-100'
              >
                  Tags
              </span>
            </router-link>
          </li>
          <li class='col-span-3 sm:col-span-2'>
            <a href='https://kazuyan-cui.vercel.app/' target='_blank'>
              <span
                class='block w-full px-6 transition duration-300 opacity-75 hover:opacity-100'
              >
                Portfolio
              </span>
            </a>
          </li>
          <li class='col-span-3 sm:col-span-2'>
            <a href='https://github.com/kazuki-komori' target='_blank'>
              <span
                class='block w-full px-6 transition duration-300 opacity-75 hover:opacity-100'
              >
                GtiHub
              </span>
            </a>
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
      nav: [
        {
          title: 'home',
          link: '/'
        }
      ]
    }
  },
  computed: {
    timer() {
      return this.time
    },
  },
  methods: {
    refresh() {
      this.time = this.$moment()
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
