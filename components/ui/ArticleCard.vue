<template>
  <section class='my-10 p-6 grid grid-cols-9'>
    <span class='col-span-2 text-xl tracking-wider'>{{dateTime(article.createdAt)}}</span>
    <section class='col-span-7'>
      <AppLabel :tags='article.tags'/>
      <router-link :to='`article/${article.title}`'>
        <span class='block grid-cols-5 mb-10'>
          <h2 class='text-4xl font-medium hover:text-green'>
            {{ article.title }}
          </h2>
        </span>
      </router-link>
      <p class='text-xl tracking-wider'>{{ article.description }}</p>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tags: ["tag1", "tag2"]
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateTime() {
      return (time) => {
        const day = new Date(time)
        return `${day.getFullYear()}/${day.getMonth() + 1}/${day.getDate()}`
      }
    }
  }
}
</script>
