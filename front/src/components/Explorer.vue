<template>
  <div class="explorer">
    <div v-if="tree.iAmASpec === true">
      <measures :src="'../../../static'+urlPath.slice(2)+tree.theFolder+'/index.html'"></measures>
    </div>
    <div v-else>
      <div class="container">
        <h1>Measures</h1>
        <div class="folders">
          <a class="folder-wrapper" v-for="folder in tree.childFoldersArray" :href="urlPath+folder.folderName+'/'">
            <div class="folder">
                {{ folder.folderName }}
            </div>

            {{error.message}}
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import FoldersService from '@/services/FoldersService'
import axios from 'axios';
import Measures from './Measures';

export default {
  components: {
    Measures
  },
  data () {
    return {
      tree: [],
      error: [],
      urlPath:''
    }
  },

  mounted() {
    var urlPath = this.$route.path
    this.urlPath = urlPath
    var backPath = "http://localhost:8081"+ urlPath

    axios.get(backPath)
    .then(response => {
      this.tree = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

  }
}
</script>


<style lang="scss">

@import './general.scss';
.container h1{
  padding: 0em 0.5rem;
}
.folders{
  display: flex;
  justify-content:space-between;
  flex-wrap:wrap;
}

a.folder-wrapper {
  box-sizing: border-box;
  padding: 1em 1em;
  margin: 0.5em;
  width: calc(50% - 1em);
  color:$gray-500;
  text-decoration: none;
  background: white;
  border: 1px solid $gray-100;
  border-radius: 5px;
  align-items: center;

  font-size: 1.3em;


  .folder {

    &::before {

      content: url('../assets/folder-icon.svg');
      display: inline-block;
      vertical-align: middle;
      margin-right: .5em;
    }

  }
}
</style>
