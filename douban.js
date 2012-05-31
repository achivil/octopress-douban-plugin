var douban = (function() {
	return {
		showUser: function(options) {
			var url = "http://api.douban.com/people/" + options.user + "/collection?alt=xd&callback=renderJSON";
			if (options.apikey.length > 0) url += "&apikey=" + options.apikey;
			if (options.category.length > 0) url += "&cat=" + options.category;

			$("<script/>").attr("src", url).attr("charset", "utf-8").attr('id', 'douban-json').appendTo($("head")[0]);
		}
	};
})();

function renderJSON(status) {
	var i = 0,
	fragment = '',
	t = $('#douban_status')[0];

  var entry = status['entry'];

	for (i = 0; i < entry.length && i < 9; i++) {
    if (i % 3 == 0) {
      fragment += '<li>';
    }
    var subject = entry[i]["db:subject"],
		link = subject["link"][1]["@href"],
		img_src = subject["link"][2]["@href"],
		aiotitle = entry[i]["title"]["$t"];
		fragment += '<a target="_blank" aiotitle="' + aiotitle + '" href="' + link + '"> <img src="' + img_src + '"> </a>';
    if (i % 3 == 2) {
      fragment += '</li>';
    }
	}
	t.innerHTML = fragment;
}

