import Api from '@/services/Api'

export default {
  fetchMd () {
    return Api().get('markdown/test')
  }
}
