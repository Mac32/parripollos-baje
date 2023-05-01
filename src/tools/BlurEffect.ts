export const BlurEffect = (id: string, duration: number): void => {
  const containerComment = typeof window !== 'undefined' && (window.document.getElementById(id) != null) ? (document.getElementById(id)) : null

  containerComment?.classList.toggle('blur-md')
  setTimeout(() => {
    containerComment?.classList.toggle('blur-md')
  }, duration)
}
