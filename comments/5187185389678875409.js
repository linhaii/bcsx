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