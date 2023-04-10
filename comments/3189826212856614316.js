window.g_loadAllComments = function() {
  if (window.isCommentInited) {
    return {
      feed: {}
    }
  }

  var comments = atob('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');
  var inputArray = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) {
    inputArray[i] = comments.charCodeAt(i);
  }
  var outputArray = pako.inflate(inputArray);
  window.isCommentInited = true;
  return JSON.parse(new TextDecoder("utf-8").decode(outputArray));
}