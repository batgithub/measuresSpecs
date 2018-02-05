import Api from '@/services/Api'

export default {
  fetchFolders () {
    return Api().get('/')
  }
}
