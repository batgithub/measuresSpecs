<template lang="html" charset="utf-8">
    <aside class="sidebar">
        <sidebar-header :href='backLink' :titleLink='backTitleLink' :title='title'></sidebar-header>

        <sidebar-footer :linkDownload='mdMeta.linkDownload' :linkView='mdMeta.linkView' ></sidebar-footer>

        <div class="content">
          <markdown-content :content='md.parsedContent' :dateModif='dateModif'></markdown-content>
        </div>




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
      mdMeta: [],
      backLink: '',
      backTitleLink:'',
      errors: [],
      title:'',
      dateModif:'',
      dateModifBrut:''
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
        var urlPath = '/explorerFiles/'+this.$route.path.slice(9)+folderToPreview+'/'+'history'
        var backPath = "http://localhost:8081/markdown"+urlPath



        Api().get(backPath)
            .then(response => {
              this.md = response.data
              this.mdMeta = response.data.meta
              this.dateModifBrut = response.data.modified
              this.dateModif = this.getFormatedDate( this.dateModifBrut )
            })
            .catch(e => {
              this.errors.push(e)
            })



    },
    methods: {
        getFormatedDate: function(date){
            var moment = require('moment');
            var formatedDate = moment(date, moment.ISO_8601, 'fr').calendar();
            return formatedDate

        }

    }

}

</script>

<style lang="scss">
.sidebar {
    width: 500px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;

    .content {
      padding: 1em;
      overflow: scroll;
    }
}
</style>
