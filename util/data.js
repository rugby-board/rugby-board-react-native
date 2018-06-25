import timeoutify from 'timeoutify-promise';

function getData(url, callback, timeout) {
  const domain = 'http://www.nbrugby.com';
  const realURL = domain + url;
  timeoutify(fetch(realURL), 3000)
    .then((response) => {
      return response.json();
    })
    .then((json) => { callback(json); })
    .catch(() => {
      timeout();
    });
}

export function getHomePage(callback, timeout) {
  getData('/api/index', callback, timeout);
}

export function getNewsByChannel(channelId, pageNum, callback, timeout) {
  getData(`/api/list?channel=${channelId}&page=${pageNum}`, callback, timeout);
}

export function getNewsByEvent(eventId, pageNum, callback, timeout) {
  getData(`/api/list?event=${eventId}&page=${pageNum}`, callback, timeout);
}

export function getNewsItem(newsId, callback, timeout) {
  getData(`/api/news/${newsId}`, callback, timeout);
}

export function translateWord(word, callback) {
  getData(`/api/translate/${word}`, callback);
}
