fetch('http://vtr21ben.pac.bj/WS_ESCALES?test#/WS_Escales|GET')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));