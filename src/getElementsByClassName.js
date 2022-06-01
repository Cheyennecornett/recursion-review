// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elements = [];

  var childNodeSearch = function(nodes) {
    var list = nodes.classList;
    var children = nodes.childNodes;


    if (list && list.contains(className)) {
      elements.push(nodes);
    }

    if (children.length > 0) {
      for (var i = 0; i < children.length; i++) {
        childNodeSearch(children[i]);
      }
    }
  };

  childNodeSearch(document.body);
  return elements;
};

