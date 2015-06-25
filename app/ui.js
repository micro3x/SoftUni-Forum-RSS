var app = app || {};
app.ui = app.ui || {};

(function (scope) {

    function displayPosts(container, data) {
        for(var itemIndex in data.rss.channel.item){
            var id = data.rss.channel.item[itemIndex].guid['#text'];
            var link = createitem(data.rss.channel.item[itemIndex], app.data.isNew(id));
            container.append(link);
        }
    }

    function createitem(itemData, isNew){
        var li = $('<li>');
        var link = $('<a>');

        link.text(itemData.title['#text']);
        link.attr('href', itemData.link['#text']);
        link.attr('target', "_blank");

        if(isNew){
            li.addClass('new-post');
        }

        li.append(link);
        return li;
    }

    scope.ui.displayPosts = displayPosts;
})(app)

