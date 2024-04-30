<script>
import AppLoader from './components/AppLoader.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './data/store';
export default {
  name: 'BoolBnb',
  components: { AppLoader, AppHeader },
  data: () => ({
    store
  }),
  methods: {
    async logout(event) {
      if (confirm('Vuoi davvero uscire?')) {
        try {
          axios.get()
        } catch (err) {

        }
      }
    }
  }
}
</script>

<template>
  <AppLoader v-if="store.isLoading" />
  <AppHeader @logout="logout" />
  <div class="container">
    <!-- pagine -->
    <RouterView />
  </div>
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
