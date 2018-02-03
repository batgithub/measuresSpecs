<template>
    <div class="specs-wrapper">
        <sidebar></sidebar>
        <specs></specs>
    </div>
</template>

<script>
import Specs from './measures/specs'
import Sidebar from './measures/Sidebar'

export default {
  components: {
    Specs,
    Sidebar
  }
}
</script>

<style lang="css">
.specs-wrapper {
position: fixed;
display: flex;
width: 100%;
height: 100vh;
}
</style>
