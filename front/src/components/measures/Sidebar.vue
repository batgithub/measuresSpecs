<template lang="html" charset="utf-8">
    <aside class="sidebar">
        <sidebar-header href="link transmit to child components"></sidebar-header>
        <div v-html="md.parsedContent">
        </div>

    </aside>
</template>

<script>
import SidebarHeader from './Sidebar/SidebarHeader'
import MdService from '@/services/MdService'

export default {
  name: 'sidebar',
  components: {
    SidebarHeader
  },
  data () {
    return {
      md: []
    }
  },
  mounted () {
    this.getMd()
  },
  methods: {
    async getMd () {
      const response = await MdService.fetchMd()
      this.md = response.data
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
