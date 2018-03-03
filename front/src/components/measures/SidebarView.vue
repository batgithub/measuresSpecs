<template lang="html" charset="utf-8">
    <aside class="sidebar">
        <sidebar-header :href='backLink' :titleLink='backTitleLink' :title='title'></sidebar-header>
        <div v-html="md.parsedContent">
        </div>
        <div v-html="md.modified">
        </div>


    </aside>
</template>

<script>
import Api from '@/services/api'
import SidebarHeader from './Sidebar/SidebarHeader'


export default {
  name: 'sidebar',
  components: {
    SidebarHeader
  },
  data () {
    return {
      md: [],
      backLink: '',
      backTitleLink:'',
      errors: [],
      title:''
    }
  },
  mounted() {

    //backLink
    this.backLink = this.$route.path
    console.log(this.$route.path.split("/"));
    // get markdown
    var folderToPreview = this.$route.query.preview
    this.title = folderToPreview

    var urlPath = this.$route.path.slice(2)+folderToPreview+'/'+'history'


    var backPath = "http://localhost:8081/markdown"+urlPath


    Api().get(backPath)
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
    width: 400px;
    height: 100%;
}
</style>
