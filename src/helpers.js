// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
export default function getSearchParam(name, url = window.location.href) {
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return '';
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
