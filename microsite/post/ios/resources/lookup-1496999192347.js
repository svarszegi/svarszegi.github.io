(function(window, undefined) {
  var dictionary = {
    "130d29e2-ef1e-4c96-a2c0-9de8f6343142": "Screen 9",
    "ebda9f4d-ebc1-4fcb-b16f-133037168206": "Screen 12",
    "9ae79af6-81c3-4aed-af71-2ad4319c8b20": "Screen 8",
    "0ce0d332-38f0-4129-9e40-8f383e9cb4c9": "Screen 11",
    "9d5b318b-444a-46e9-b57b-7bd549310c8e": "Screen 7",
    "f2fc0fa4-8760-477a-b7c9-37dd14cc52fc": "Screen 10",
    "0ea74ff9-c346-4316-b9a0-1b68cba88342": "Screen 6",
    "9b9b91aa-2246-4530-8d3d-f5b6e49c8f2d": "Screen 5",
    "57065a06-8751-4d92-aee3-b6cc41e67f11": "Screen 4",
    "39f1dd2d-866c-4194-a1d9-fb01fa630165": "Screen 3",
    "99e788cf-8a11-4e2e-9b47-0b9997eaaa43": "Screen 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
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