$(document).ready(function () {
    $.getJSON('services.json', function (data) {
        $.each(data, function (key, val) {
            var li = document.createElement('li');
            var arr = val.entity.tags;

            li.innerHTML = "<img src='" + val.entity.extra.imageUrl + "' style='margin-right:10px;' width='21'; height='21'>" + "<a href='" + val.entity.extra.documentationUrl + "' target='_blank'>" + val.entity.extra.displayName + "</a>";

            if ($.inArray("dev_ops", arr) !== -1) {
                $("#devOpsServices")[0].appendChild(li);
            } else if ($.inArray("watson", arr) !== -1) {
                $("#cognitiveServices")[0].appendChild(li);
            } else if ($.inArray("big_data", arr) !== -1) {
                $("#analyticsServices")[0].appendChild(li);
            } else if ($.inArray("data_management", arr) !== -1) {
                $("#dataServices")[0].appendChild(li);
            } else if ($.inArray("business_analytics", arr) !== -1) {
                $("#businessServices")[0].appendChild(li);
            } else if ($.inArray("storage", arr) !== -1) {
                $("#storageServices")[0].appendChild(li);
            } else if ($.inArray("internet_of_things", arr) !== -1) {
                $("#iotServices")[0].appendChild(li);
            } else if ($.inArray("web_and_app", arr) !== -1) {
                $("#webServices")[0].appendChild(li);
            } else if ($.inArray("mobile", arr) !== -1) {
                $("#mobileServices")[0].appendChild(li);
            }
        });
    
    
    $("#weblist").click(function(){
        $("#paascontent").hide();
        $("#mobcat").hide();
        $("#webcat").show();
        });
    $("#moblist").click(function(){
        $("#paascontent").hide();
        $("#webcat").hide();
        $("#mobcat").show();
        });
    $("#paastrigger").click(function(){
        $("#paascontent").show();
        $("#mobcat").hide();
        $("#webcat").hide();
        });
        });
});