export const query = (url) => {
  console.log("query url: ", url)
  if (url === undefined || url.length == 0) {
    return null
  }

  const [base, params] = url.indexOf("?") ? url.split("?") : ["", url]
  console.log("query url params: ", params)
  return new URLSearchParams(params)
}
