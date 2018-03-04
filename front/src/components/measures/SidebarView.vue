<template lang="html" charset="utf-8">
    <aside class="sidebar">
        <sidebar-header :href='backLink' :titleLink='backTitleLink' :title='title'></sidebar-header>
        <div class="content">
          <markdown-content :content='md.parsedContent'></markdown-content>
        </div>
        <sidebar-footer></sidebar-footer>



    </aside>
</template>

<script>
import Api from '@/services/api'
import SidebarHeader from './Sidebar/SidebarHeader'
import markdownContent from './Sidebar/markdownContent'
import sidebarFooter from './Sidebar/sidebarFooter'


export default {
  name: 'sidebar',
  components: {
    SidebarHeader,
    markdownContent,
    sidebarFooter

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

    //backLink title
    var backLinkSlice = (this.$route.path.slice(1,-1)).split("/")
    this.backTitleLink = backLinkSlice[backLinkSlice.length-1]

    // Title file previewing
    var folderToPreview = this.$route.query.preview
    this.title = folderToPreview

    // get markdown
    var urlPath = this.$route.path.slice(9)+folderToPreview+'/'+'history'
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

<style lang="scss">
.sidebar {
    width: 500px;
    height: 100%;
    background: white;
    .content {
      padding: 1em;
    }
}
</style>
