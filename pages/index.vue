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
  async asyncData({ $content }) {
    const articles = await $content("blog").fetch()
    console.log(articles)
    console.log()
    return {
      articles
    }
  }
}
</script>
