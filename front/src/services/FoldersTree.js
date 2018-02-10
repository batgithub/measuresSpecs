import Api from '@/services/Api'

export default {
  fetchFolders (path) {
    return Api().get('/folders/'+path)
  }
}
