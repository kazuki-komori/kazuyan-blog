<template>
  <article v-if='page'>
    <div class='lg:pb-10'>
      <div class='py-4 lg:py-8'>
        <h1 class='lg:text-5xl text-3xl text-center'>{{ page.title }}</h1>
        <section class='flex justify-center items-center pt-3'>
          <span class='flex px-2'>
            <span class="material-icons px-1">
              cached
            </span>
            {{ dateTime(page.updatedAt) }}
          </span>
          <span class='flex px-2'>
            <span class="material-icons px-1">
              access_time
            </span>
            {{ readTime(page.readingTime) }} min
          </span>
        </section>
        <section class='flex justify-center items-center pt-4'>
          <AppLabel :tags='page.tags' />
        </section>
      </div>
      <section class='lg:grid lg:grid-cols-9 lg:gap-8'>
        <div class='col-span-7'>
          <AppCard>
            <div class='prose lg:prose-lg max-w-none px-4 lg:px-10'>
              <nuxt-content :document="page" />
            </div>
          </AppCard>
        </div>
        <div class='col-span-2'>
          <div class='sticky p-index__card'>
            <AppCard>
              <div class='lg:py-8 px-4'>
                <img class='rounded-full mx-auto w-24 h-24' src='@/assets/img/kazuyan.jpg' alt='kazuyanのアイコン'>
                <section class='py-4'>
                  <p class='text-center text-xl font-medium pb-2'>かずやん</p>
                  <p class='text-md text-center pb-2'>
                    <span class='font-bold text-vueGreen'>Vue</span> を愛する
                    <br/>フロントエンドエンジニア
                  </p>
                  <p class='text-center text-sm'>Vue/React/Svelte/Python/Go</p>
                  <a target='_blank' href='https://twitter.com/D_kazuyan'>
                    <section class='flex py-4'>
                        <img class='rounded rounded-full h-8 w-8 mr-4' src='@/assets/img/twitter-icon.png' alt=''>
                        <p class='hover:text-blue-500'>D_kazuyan</p>
                    </section>
                  </a>
                  <a target='_blank' href='https://github.com/kazuki-komori'>
                    <section class='flex'>
                      <img class='rounded rounded-full h-8 w-8 mr-4' src='@/assets/img/github-icon.png' alt=''>
                      <p class='hover:text-blue-500'>kazuki-komori</p>
                    </section>
                  </a>
                </section>
              </div>
            </AppCard>
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import blogMixin from "@/mixins/_blog"
export default {
  head() {
    return {
      meta: [
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
        { hid: 'og:type', property: 'og:type', content: 'blog' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://kazuki-komori.github.io/kazuyan-blog/article/${this.page.title}`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://res.cloudinary.com/dru1maoes/image/upload/l_text:Sawarabi%20Gothic_50_bold:${this.page.title},co_rgb:5D6D7E,w_750,g_west,x_300,c_fit/v1613210395/OGP_jafx58.png`
        },
      ]
    }
  },
  mixins: [blogMixin],
  data() {
    return {
      heights: []
    }
  },
  mounted() {
    if (!this.page) {
      this.$router.push("/")
    }
  },
  async asyncData ({ $content, params }) {
    const fs = await $content('blog').where({title: params.title}).fetch()
    const page = fs[0]
    return {
      page
    }
  },
}
</script>
<style>
.nuxt-content h2 {
  padding-bottom: 0.5rem;
  border-bottom: 1px #00CEA5 solid;
}
.nuxt-content a {
  font-size: 1.2rem;
  color: #00CEA5;
}
.nuxt-content p {
  font-size: 1.2rem;
}
.nuxt-content .nuxt-content-highlight {
  position: relative;
}
.nuxt-content .filename {
  position: absolute;
  padding-top: 0.5rem;
  padding-right: 1rem;
  right: 0;
  color: white;
}
.p-index__card {
  top: 100px;
}
</style>
