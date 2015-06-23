var app = app || {};
app.ui = app.ui || {};

(function (scope) {

    function displayPosts(container, data) {
        for(var itemIndex in data.rss.channel.item){
            var link = createitem(data.rss.channel.item[itemIndex])
            container.append(link);
        }
    }

    function createitem(itemData){
        var li = $('<li>');
        var link = $('<a>');

        link.text(itemData.title['#text']);
        link.attr('href', itemData.link['#text']);
        link.attr('target', "_blank");


        li.append(link);
        return li;
    }

    scope.ui.displayPosts = displayPosts;
})(app)

