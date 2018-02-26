<template>
  <div class="explorer">
    <div v-if="isPreview === true">
      <measures :src="'../../../static'+urlPath.slice(2)+folderToPreview+'/'+tree.theFolder+'/index.html'"></measures>
    </div>
    <div v-else>
      <div class="container">
        <h1><a href="/e/">Measures</a></h1>
        <div class="folders">
          <div class="folder-wrapper" v-for="folder in tree.childFoldersArray">
            <a class="" v-if="folder.isSpec === true" :href="urlPath+'?preview='+folder.folderName">
              <div v-bind:class="{folder, specs:folder.isSpec}">
                {{ folder.folderName }}
              </div>
              {{errors.message}}
            </a>
            <a class="" v-if="folder.isSpec === false" :href="urlPath+folder.folderName+'/'">
              <div v-bind:class="{folder, specs:folder.isSpec}">
                {{ folder.folderName }}
              </div>
              {{errors.message}}
            </a>
          </div>
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
      errors: [],
      isPreview: '',
      folderToPreview: '',
      urlPath:''
    }
  },

  mounted() {

    var queryURL = this.$route.query
    var folderToPreview = queryURL.preview


    if ( Object.keys(queryURL).length > 0) {
      this.isPreview = true
      this.folderToPreview = folderToPreview
    } else if(Object.keys(queryURL).length === 0){
      this.isPreview = false
      folderToPreview = ''
    } else {
      this.isPreview = false
    }


    var urlPath = this.$route.path
    this.urlPath = urlPath
    var backPath = "http://localhost:8081"+ urlPath + folderToPreview +"/"




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


.folder-wrapper {

  box-sizing: border-box;
  padding: 1em 1em;
  margin: 0.5em;
  width: calc(50% - 1em);

  background: white;
  border: 1px solid $gray-100;
  border-radius: 5px;
  align-items: center;

  a {
    font-size: 1.3em;
    color:$gray-500;
    text-decoration: none;

  }

  .folder {
    &::before {
      content: url('../assets/folder-icon.svg');
      display: inline-block;
      vertical-align: middle;
      margin-right: .5em;
    }
  }

  .folder.specs {
    &::before {
      content: url('../assets/folder-icon-specs.svg')!important;
    }
  }
}
</style>
