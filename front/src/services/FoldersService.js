import Api from '@/services/Api'

export default {
  fetchFolders () {
    return Api().get('folders/test2/')
  }
}
