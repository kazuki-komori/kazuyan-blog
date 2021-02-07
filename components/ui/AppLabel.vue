<template>
  <section class='flex pb-3'>
    <span class="material-icons">
      label
    </span>
    <section v-for='(tag, idx) in tags' class='cursor-pointer text-lg px-2 tracking-wide hover:text-green' :key='idx'>
      <p @click='tagIndex(tag)'># {{tag}}</p>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  methods: {
    tagIndex(tag) {
      this.$router.push({path: "/", query: {tag}})
    }
  }
}
</script>
