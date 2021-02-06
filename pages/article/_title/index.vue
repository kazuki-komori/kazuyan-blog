<template>
  <article>
<!--    <h1>{{ page.title }}</h1>-->
<!--    <nuxt-content :document="page" />-->
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    console.log(params.title)
    const page = await $content('').fetch()

    return {
      page
    }
  }
}
</script>
