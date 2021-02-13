<template>
  <section class='py-10 p-6 grid sm:grid-cols-9'>
    <span class='col-span-2 text-xl tracking-wider pb-2'>{{dateTime(article.updatedAt)}}</span>
    <section class='sm:col-span-7'>
      <section class='flex'>
        <span class='flex pr-4'>
          <span class="material-icons px-1">
            access_time
          </span>
          {{ readTime(article.readingTime) }} min
        </span>
        <AppLabel :tags='article.tags'/>
      </section>
      <router-link :to='`article/${article.title}`'>
        <span class='block grid-cols-5 lg:mb-10 mb-4'>
          <h2 class='sm:text-4xl text-3xl font-medium hover:text-green'>
            {{ article.title }}
          </h2>
        </span>
      </router-link>
      <p class='text-xl tracking-wider'>{{ article.description }}</p>
    </section>
  </section>
</template>
<script>
import blogMixin from "@/mixins/_blog"
export default {
  mixins: [blogMixin],
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
  }
}
</script>
