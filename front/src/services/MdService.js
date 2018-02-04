import Api from '@/services/Api'

export default {
  fetchMd (path) {
    return Api().get('markdown/'+path)
  }
}
