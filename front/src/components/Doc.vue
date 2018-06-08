<template lang="html">
    <div class="doc">
        <h1>hello world!</h1>
        <p v-html='md.parsedContent'></p>
        <p>{{ mdMeta.colors }}</p>
        <p>{{ modifTime }}</p>
    </div>
</template>

<script>
import Api from '@/services/api'
export default {
    name: 'Doc',

    data() {
        return {
            md: [],
            mdMeta: [],
            modifTime: []
        }
    },

    mounted() {
        // get markdown
        var backPath = "http://localhost:8081/markdown/documentation/colors"

        Api().get(backPath)
        .then(response => {
          this.md = response.data
          this.mdMeta = response.data.meta
          this.modifTime = response.data.modified

        })
        .catch(e => {
          this.errors.push(e)
        })
    }
}
</script>

<style lang="css">
</style>
