// $("#uprojects ul li").remove();
// var ul = $("#uprojects ul");
// $.ajax({
//     url: 'uprojects.json',
//     async: false,
//     dataType: 'json',
//     success: function (data) {
//         $.each(data, function (index, value) {
//             var li = document.createElement('li');
//             var a = document.createElement('a');
//             var img = document.createElement('img');
//             a.setAttribute('href','#');
//             a.setAttribute('data-largesrc',value["data-largesrc"]);
//             a.setAttribute('data-title',value["data-title"]);
//             a.setAttribute('data-description',value["data-description"]);
//             img.setAttribute('src', value["thumbs"]);
//             img.setAttribute('alt', "");
//             a.appendChild(img);
//             li.appendChild(a);
//             ul.append(li);
//             // console.log(li);
//             });
//         Grid.init();
//     }
// });

$.getJSON("uprojects.json", function (data) {
$("#uprojects ul li").remove();
var ul = $("#uprojects ul");
$.each(data, function (index, value) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    var img = document.createElement('img');
    a.setAttribute('href','#');
    a.setAttribute('data-largesrc',value["data-largesrc"]);
    a.setAttribute('data-title',value["data-title"]);
    a.setAttribute('data-description',value["data-description"]);
    img.setAttribute('src', value["thumbs"]);
    a.appendChild(img);
    li.appendChild(a);
    ul.append(li);
    console.log(li);
    });
});
