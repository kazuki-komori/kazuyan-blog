<template>
  <div class='bg-gray-900 text-default'>
    <AppHeader/>
    <AppContainer>
      <Nuxt />
    </AppContainer>
  </div>
</template>

<script>
import AppContainer from '../components/layout/AppContainer'
import AppHeader from '../components/layout/AppHeader'
export default {
  components: { AppHeader, AppContainer }
}
</script>
<style>
.text-default {
  color: #fff;
}
</style>
