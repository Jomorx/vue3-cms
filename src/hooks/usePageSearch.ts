import PageContent from '@/components/page-content'
import { ref } from 'vue'

export default () => {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleSearchClick = (searchInfo: any) => {
    pageContentRef.value?.getPageData(searchInfo)
  }
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  return { pageContentRef, handleSearchClick, handleResetClick }
}
