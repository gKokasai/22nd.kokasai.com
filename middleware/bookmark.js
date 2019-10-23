export default ({app}) => {
  const didCookieWrote = app.$cookies.get("bookmark")

  if (!didCookieWrote) {
    try {
      app.$cookies.set("bookmark", {booths: [], stages: []})
    } catch (error) {
      console.log(error)
    }
  }
}
