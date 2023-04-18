(function(){
  var comments = atob('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');

  var input = new Uint8Array(comments.length);
  for (var i = 0; i < comments.length; i++) { input[i] = comments.charCodeAt(i);}
  var output = pako.inflate(input,{ to: 'string' });
  window.g_commentLoader.onLoad(JSON.parse(output));
})();