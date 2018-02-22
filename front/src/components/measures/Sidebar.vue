<template lang="html" charset="utf-8">
    <aside class="sidebar">
        <sidebar-header href="link transmit to child components"></sidebar-header>
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
      errors: []
    }
  },
  mounted() {
    var urlPath = this.$route.path.slice(2)+"history"
    this.urlPath = urlPath

    var urlBackLink = this.$route.path.slice(2)
    console.log(urlBackLink);
    var test = urlBackLink.substring(urlBackLink.lastIndexOf('/')+1)

    //to do Delete the last "/" 
    var testest = "http://localhost:8081/markdown"
    var test2 = testest.substring(testest.lastIndexOf('/')+1)
    console.log(test);



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
