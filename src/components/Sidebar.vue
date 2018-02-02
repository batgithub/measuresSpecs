<template lang="html">
    <aside class="sidebar">
        <sidebar-header href="link transmit to child components"></sidebar-header>
        <div v-html='mdParsed'>

        </div>
    </aside>
</template>

<script>
import SidebarHeader from './Sidebar/SidebarHeader'
var marked = require('marked');
// var Test = require('../../static/Test.md')


export default {
  components: {
    SidebarHeader
  },
  data () {
    return {
      md_text: '# zfeoj'
    }
  },
  computed: {
  	mdParsed() {

  		marked.setOptions({
  		  renderer: new marked.Renderer(),
  		  gfm: true,
  		  tables: true,
  		  breaks: true,
  		  pedantic: false,
  		  sanitize: true,
  		  smartLists: true,
  		  smartypants: false
  		})
  		return marked(this.md_text)
  	}
  },
}
</script>

<style lang="css">
.sidebar {
    width: 300px;
    height: 100%;
}
</style>
