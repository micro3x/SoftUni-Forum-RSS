var app = app || {};

$('document').ready(
    function () {
        var container = $('#posts');

        app.data.getLatestPosts().then(
            function (data) {
                app.ui.displayPosts(container, data);
            }
        )

    }
);