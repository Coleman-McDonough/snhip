declare module "react-modal-video" {
  import { ComponentType } from "react"
  const ModalVideo: ComponentType<{
    channel?: string
    autoplay?: boolean
    start?: boolean | number
    isOpen: boolean
    videoId: string
    onClose: () => void
    [key: string]: unknown
  }>
  export default ModalVideo
}
