<template>
  <section class='flex pb-3'>
    <span class="material-icons">
      label
    </span>
    <section v-for='(tag, idx) in tags' class='text-lg px-2 tracking-wide hover:text-green' :key='idx'>
      <router-link to='#'># {{tag}}</router-link>
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
  }
}
</script>
