export const getYoutubeEmbedLink = (youtubeURL) =>
  `https://www.youtube.com/embed/${extractYoutubeID(youtubeURL)}`

export const getYoutubeThumbnail = (youtubeURL) =>
  `https://img.youtube.com/vi/${extractYoutubeID(youtubeURL)}/0.jpg`

const extractYoutubeID = (youtubeURL) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
  const match = youtubeURL.match(regExp)
  const id = match[7]
  return id
}
