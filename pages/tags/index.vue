<template>
  <section class='pt-10'>
    <div
      v-for='(tag, idx) in tags' :key='idx'
      class='text-2xl sm:px-40 px-10 pt-4 hover:text-green cursor-pointer'
    >
      <li @click='tagIndex(tag)'>
        # {{tag}}
      </li>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({$content}) {
    const f = await $content('config/tags').fetch()
    const tags = f.tags
    return {
      tags
    }
  },
  methods: {
    tagIndex(tag) {
      this.$router.push({path: "/", query: {tag}})
    }
  }
}
</script>
