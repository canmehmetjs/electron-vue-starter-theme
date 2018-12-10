<template>
  <div id="app">
      <navigation/>
      <router-view></router-view>
  </div>
</template>

<script>
   import navigation from '@components/navigation'
  // Import the main sass file
  import '@sass'
  export default {
    name: 'mainapp',
    components:{
      'navigation' : navigation
    }
  }
</script>


<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';

// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';

// ===
// Vendor
// ===

#nprogress .bar {
  background: #1FC665;
}
#nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 85px;
    right: 35px;
}

</style>
