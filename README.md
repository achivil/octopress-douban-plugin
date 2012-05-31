## Octopress Plugin - Douban

This is a plugin of [Octopress](http://octopress.org/) (the most awesome blog system), which can display your personal douban status at the sidebar.

### Installation

At first,
```
git clone git://github.com/LarryLv/octopress-douban-plugin.git
cd octopress-douban-plugin
cp douban.html /your-blog-root-path/source/_includes/custom/asides/
cp douban.js /your-blog-root-path/source/javascripts/
```

then edit your ```_configy.yml```,

1. add `custom/asides/douban.html` to your default_asides array.
2. add the following configurations to the end

```
douban_user: your-douban-username
douban_apikey: your-douban-apikey # you can leave this blank
douban_display_category: #movie, book, music (if blank, will fetch all these categories)
```

at last,
```
rake generate
rake deploy
```

## TO-DO

1. It doesn't work with Firefox, and I just don't know why. Oops... I will fix it soon.

2. Add more optional configurations such as display numbers, display specified status(book:wish,reading,read movie:wish,watched and so on)

3. Display the douban-status on a seperate page




