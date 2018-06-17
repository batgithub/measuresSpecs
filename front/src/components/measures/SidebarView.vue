<template lang="html" charset="utf-8">
    <aside class="sidebar">
        <sidebar-header :href='backLink' :titleLink='backTitleLink' :title='title'></sidebar-header>

        <sidebar-footer :linkDownload='mdMeta.linkDownload' :linkView='mdMeta.linkView' ></sidebar-footer>

        <div class="content">
          <markdown-content :content='md.parsedContent' :dateModif='this.getFormatedDate(lastDateModif)'></markdown-content>
        </div>

    </aside>
</template>

<script>
import Api from '@/services/api'
import SidebarHeader from './Sidebar/SidebarHeader'
import markdownContent from './Sidebar/markdownContent'
import sidebarFooter from './Sidebar/sidebarFooter'
var moment = require('moment');


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
      lastDateModif:'',
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
        var backPath = process.env.host + ':' + process.env.API_PORT+"/markdown"+urlPath

        this.getApiData(backPath)

        //check every X ms if there is a new version of .md file
        var interval = setInterval(() => {
            this.getApiData(backPath)
            console.log("________________________________");
        }, 5000);



    },
    destroyed() {
      clearInterval(this.interval)
    },
    methods: {
        getFormatedDate: function(date){

            var formatedDate = moment(date, moment.ISO_8601, 'fr').calendar();
            return formatedDate

        },
        checkIfIsNew: function(newDate) {

            var isAfter = moment(newDate).isAfter( this.lastDateModif )

            if (isAfter === true) {
                console.log('launch pop up');
                this.lastDateModif = newDate
            }

            else if (isAfter === false) {
                console.log('do nothing');
                this.lastDateModif = newDate
            }

        },

        getApiData: function(link) {
            Api().get(link)
                .then(response => {
                  this.md = response.data
                  this.mdMeta = response.data.meta
                  this.checkIfIsNew(response.data.modified)
                })
                .catch(e => {
                  this.errors.push(e)
                })
        },

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
