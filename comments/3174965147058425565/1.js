(function(){
  var comments = atob('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');

  var input = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) { input[i] = comments.charCodeAt(i);}
  var output = pako.inflate(input,{ to: 'string' });
  window.g_commentLoader.onLoad(JSON.parse(output));
})();