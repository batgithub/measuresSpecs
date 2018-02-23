<template lang="html" charset="utf-8">
    <aside class="sidebar">
        <sidebar-header :href='backLink' ></sidebar-header>

        <div v-html="md.parsedContent">
        </div>
        <div v-html="md.modified">
        </div>


    </aside>
</template>

<script>
import SidebarHeader from './Sidebar/SidebarHeader'
import axios from 'axios';

export default {
  name: 'sidebar',
  components: {
    SidebarHeader
  },
  data () {
    return {
      md: [],
      backLink: '',
      errors: []
    }
  },
  mounted() {

    //get back link
    var urlPathSlashFree = this.$route.path.slice(0,-1)

    var urlLastItem = urlPathSlashFree.substring(urlPathSlashFree.lastIndexOf('/')+1)

    var urlPreviousPage= urlPathSlashFree.replace(urlLastItem, "");
    this.backLink = urlPreviousPage

    // get markdown
    var urlPath = this.$route.path.slice(2)+"history"
    var backPath = "http://localhost:8081/markdown"+urlPath

    axios.get(backPath)
    .then(response => {
      this.md = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}

</script>

<style lang="css">
.sidebar {
    width: 300px;
    height: 100%;
}
</style>
