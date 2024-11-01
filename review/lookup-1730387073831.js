(function(window, undefined) {
  var dictionary = {
    "4ac4ec84-a641-4291-a160-36e200e1f9e1": "Screen 2",
    "d9a6a673-42b5-4c0b-827c-0171d3811274": "Screen 3",
    "87d923b8-bb2b-4c04-a7be-e96fc361f9ab": "Screen 5",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "d0dfaf8e-d5a0-4c1b-9279-9e3e5cf6506c": "Screen 4",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);