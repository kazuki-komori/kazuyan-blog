<template>
  <div class='divide-y divide-green'>
    <div v-for='(article, idx) in articles' :key='idx'>
      <ArticleCard :article='article' />
    </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ui/ArticleCard'
export default {
  components: { ArticleCard },
  async asyncData({ $content, query }) {
    const tag = query.tag
    if (tag) {
      const articles = await $content("blog").where({tags: {$contains: tag}}).fetch()
      return {
        articles
      }
    }
    const articles = await $content("blog").fetch()
    return {
      articles
    }
  }
}
</script>
