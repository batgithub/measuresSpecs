<template lang="html">
    <div class="doc">
        <h1>hello world!</h1>
        <p v-html='md.parsedContent'></p>
        <p>{{ mdMeta.colors }}</p>
    </div>
</template>

<script>
import Api from '@/services/api'
export default {
    name: 'Doc',

    data() {
        return {
            md: [],
            mdMeta: []
        }
    },

    mounted() {
        // get markdown
        var backPath = "http://localhost:8081/markdown/documentation/colors"

        Api().get(backPath)
        .then(response => {
          this.md = response.data
          this.mdMeta = response.data.meta

        })
        .catch(e => {
          this.errors.push(e)
        })
    }
}
</script>

<style lang="css">
</style>
