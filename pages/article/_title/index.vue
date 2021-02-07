<template>
  <article v-if='page'>
    <div class='py-10'>
      <h1 class='text-5xl text-center'>{{ page.title }}</h1>
      <div class='pb-16'>
        <section class='flex justify-center items-center pt-3'>
          <span class='flex px-2'>
            <span class="material-icons px-1">
              cached
            </span>
            {{ dateTime(page.createdAt) }}
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
      <section class='grid grid-cols-9 gap-8'>
        <div class='col-span-7'>
          <AppCard>
            <div class='prose prose-lg max-w-none px-10'>
              <nuxt-content :document="page" />
            </div>
          </AppCard>
        </div>
        <div class='col-span-2'>
          <div class='sticky p-index__card'>
            <div>
              <AppCard>
                <div
                  @click='addHash(t.text)'
                  v-for='(t, idx) in page.toc'
                  :key='idx'
                  :class='{"text-vueGreen bg-opacityVue rounded": indexActive(idx)}'
                  class='cursor-pointer text-2xl font-medium px-4 pb-2'
                >
                  {{t.text}}
                </div>
              </AppCard>
            </div>
            <div class='py-4'>
              <AppCard>
                <div class='py-8 px-4'>
                  <img class='rounded-full mx-auto w-24 h-24' src='@/assets/img/kazuyan.jpg' alt='kazuyanのアイコン'>
                  <section class='py-4'>
                    <p class='text-center text-xl font-medium pb-2'>かずやん</p>
                    <p class='text-md text-center pb-2'>
                      <span class='font-bold text-vueGreen'>Vue</span> を愛する
                      <br/>フロントエンドエンジニア
                    </p>
                    <p class='text-center'>Vue/React/Python/Go</p>
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
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import blogMixin from "@/mixins/_blog"
export default {
  mixins: [blogMixin],
  data() {
    return {
      heights: [],
      scrollY: 0
    }
  },
  mounted() {
    if (!this.page) {
      this.$router.push("/")
    } else {
      window.addEventListener('scroll', this.calculateScrollY)
      this.getHeight
    }
  },
  async asyncData ({ $content, params }) {
    const fs = await $content('blog').where({title: params.title}).fetch()
    const page = fs[0]
    return {
      page
    }
  },
  computed: {
    getHeight() {
      for (const t of this.page.toc) {
        let elm = document.getElementById(t.id)
        let p = elm.getBoundingClientRect()
        this.heights.push({ id: t.id, top: p.top })
      }
    },
    indexActive() {
      return (idx) => {
        const height = this.heights[idx]
        if (height && this.heights.length !== 0) {
          if (idx < this.heights.length-1) {
            if (height.top <= this.scrollY && this.scrollY < this.heights[idx+1].top) {
              return true
            }
          } else {
            if (height.top <= this.scrollY) {
              return true
            }
          }
        }
      }
    }
  },
  methods: {
    addHash(id) {
      this.$router.push({hash: `#${id}`})
    },
    calculateScrollY() {
      this.scrollY = window.scrollY
    },
  }
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
