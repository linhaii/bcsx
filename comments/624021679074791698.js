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