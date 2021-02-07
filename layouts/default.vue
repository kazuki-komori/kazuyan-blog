<template>
  <div class='bg-gray-800 text-default'>
    <AppHeader/>
    <AppContainer>
      <Nuxt />
    </AppContainer>
    <AppFooter/>
  </div>
</template>

<script>
import AppContainer from '../components/layout/AppContainer'
import AppHeader from '../components/layout/AppHeader'
import AppFooter from '../components/layout/AppFooter'
export default {
  components: { AppFooter, AppHeader, AppContainer }
}
</script>
<style>
.text-default {
  color: #fff;
}
</style>
