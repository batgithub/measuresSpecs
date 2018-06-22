<template>
    <div class="specs-wrapper">
        <popup
            title="Oyoyoyo 🙌"
            subtitle="Nouvelle version dispo"
            content="oziejfzo efjozeijfozijef eozijfzeo ifjoijz eofijz oefijzofeij zofje zoifj zofijz ofeijzeofijz fojzof zjofijz foeijzf eojzofij zoefijz ziefhziefh izeuhfizehufizhf iuzhifhz ihfuizeuh fizeuhfizhu ifhzifhzifh zfuhz iefuhzifeuh ziufhezi hefizuhef izuhefiz hfiuhz ifuhzifuhziefh zihf ziuhef izhf izhuefiu zhfeizuh fihzif hzifhuizhuf izhf ziuhf izfizhu fihzuefi zhfihz ifuhzeifu hzoziejfzo efjozeijfozijef eozijfzeo ifjoijz eofijz oefijzofeij zofje zoifj zofijz ofeijzeofijz fojzof zjofijz foeijzf eojzofij zoefijz ziefhziefh izeuhfizehufizhf iuzhifhz ihfuizeuh fizeuhfizhu ifhzifhzifh zfuhz iefuhzifeuh ziufhezi hefizuhef izuhefiz hfiuhz ifuhzifuhziefh zihf ziuhef izhf izhuefiu zhfeizuh fihzif hzifhuizhuf izhf ziuhf izfizhu fihzuefi zhfihz ifuhzeifu hzoziejfzo efjozeijfozijef eozijfzeo ifjoijz eofijz oefijzofeij zofje zoifj zofijz ofeijzeofijz fojzof zjofijz foeijzf eojzofij zoefijz ziefhziefh izeuhfizehufizhf iuzhifhz ihfuizeuh fizeuhfizhu ifhzifhzifh zfuhz iefuhzifeuh ziufhezi hefizuhef izuhefiz hfiuhz ifuhzifuhziefh zihf ziuhef izhf izhuefiu zhfeizuh fihzif hzifhuizhuf izhf ziuhf izfizhu fihzuefi zhfihz ifuhzeifu hzoziejfzo efjozeijfozijef eozijfzeo ifjoijz eofijz oefijzofeij zofje zoifj zofijz ofeijzeofijz fojzof zjofijz foeijzf eojzofij zoefijz ziefhziefh izeuhfizehufizhf iuzhifhz ihfuizeuh fizeuhfizhu ifhzifhzifh zfuhz iefuhzifeuh ziufhezi hefizuhef izuhefiz hfiuhz ifuhzifuhziefh zihf ziuhef izhf izhuefiu zhfeizuh fihzif hzifhuizhuf izhf ziuhf izfizhu fihzuefi zhfihz ifuhzeifu hzoziejfzo efjozeijfozijef eozijfzeo ifjoijz eofijz oefijzofeij zofje zoifj zofijz ofeijzeofijz fojzof zjofijz foeijzf eojzofij zoefijz ziefhziefh izeuhfizehufizhf iuzhifhz ihfuizeuh fizeuhfizhu ifhzifhzifh zfuhz iefuhzifeuh ziufhezi hefizuhef izuhefiz hfiuhz ifuhzifuhziefh zihf ziuhef izhf izhuefiu zhfeizuh fihzif hzifhuizhuf izhf ziuhf izfizhu fihzuefi zhfihz ifuhzeifu hzoziejfzo efjozeijfozijef eozijfzeo ifjoijz eofijz oefijzofeij zofje zoifj zofijz ofeijzeofijz fojzof zjofijz foeijzf eojzofij zoefijz ziefhziefh izeuhfizehufizhf iuzhifhz ihfuizeuh fizeuhfizhu ifhzifhzifh zfuhz iefuhzifeuh ziufhezi hefizuhef izuhefiz hfiuhz ifuhzifuhziefh zihf ziuhef izhf izhuefiu zhfeizuh fihzif hzifhuizhuf izhf ziuhf izfizhu fihzuefi zhfihz ifuhzeifu hz"
            buttonLabel= "OK, refresh"
            v-bind:showModal="true"
        >
        </popup>
        <sidebar></sidebar>
        <content class="iframe">
            <iframe :src="src" width="100%" height="100%"></iframe>
        </content>
    </div>
</template>

<script>

import Sidebar from './SidebarView'
import popup from '../general/popup'

export default {
  props: ['src'],
  components: {
    Sidebar,
    popup
  }
}
</script>

<style lang="css">
.specs-wrapper {
position: fixed;
display: flex;
width: 100%;
height: 100vh;

}
.iframe {
    height: 100%;
    width: 100%;
    background: #191919;
}
</style>
