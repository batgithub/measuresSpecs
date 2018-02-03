<template lang="html">
    <aside class="sidebar">
        <sidebar-header href="link transmit to child components"></sidebar-header>
    </aside>
</template>

<script>
import SidebarHeader from './Sidebar/SidebarHeader'

export default {
  components: {
    SidebarHeader
  },
  data () {
    return {
    }
  }
}

</script>

<style lang="css">
.sidebar {
    width: 300px;
    height: 100%;
}
</style>
