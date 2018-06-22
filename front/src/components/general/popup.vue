<template lang="html">
    <transition name="fade">
        <div v-if='showModal' class="popup" :id="idTriger">
            <div class="container">
                <h1 class="title">{{ title }}{{ showModal }}</h1>
                <span class="subtitle">{{ subtitle }}</span>
                <div class="content">
                    <div class="content-wrap">
                        {{ content }}
                    </div>
                </div>
                <div class="actions">
                    <buttons
                        link=''
                        :label="buttonLabel"
                        class='button primary'
                        @click="showModal = false"
                        >
                    </buttons>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import buttons from './buttons'

export default {
    name: 'popup',
    components: {
        buttons
    },
    props: {
        title: String,
        subtitle: String,
        content: String,
        idTriger: String,
        buttonLabel: String,
        showModal: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {

        }
    }

}
</script>

<style lang="scss">

    @import '../general.scss';

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

    .popup {
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        background: rgba($gray-800,0.98);
        color: white;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        text-align: center;

        .title {
            margin-bottom: .25em;
        }
        .subtitle {
            font-size: 1.2em;
        }
        .content {
            margin: 4em 0 4em;
            border: 1px solid white;
            padding: 2em;
            border-radius: $radius;
            max-width: 560px;
            text-align: left;

            .content-wrap {
                max-height: 10em;
                overflow-y: scroll;
            }

        }
        .actions {
            display: flex;
            justify-content: center;
        }
    }
</style>
