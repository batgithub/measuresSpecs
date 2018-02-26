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

    //backLink
    this.backLink = this.$route.path

    // get markdown
    var folderToPreview = this.$route.query.preview
    var urlPath = this.$route.path.slice(2)+folderToPreview+'/'+'history'
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
