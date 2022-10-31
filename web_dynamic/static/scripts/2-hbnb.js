$(document).ready(() => {
    let list = {}
    $(".check").on("click", () => {
        $(this).each(() => {
            if (this.checked) {
                list[$(this).data("id")] = $(this).data("name");
            } else {
                delete list.$(this).data("id")
            }
        })
    })

    if (Object.values(list).length > 0) {
        $(".amenities h4").text(Object.values(list).join(", "))
    } else {
        $(".amenities h4").html("&nbsp;")
    }
})

$.get("http://0.0.0.0:5001/api/v1/status/", (data, res) => {
    if (data.status === 'OK') {
        $("div#api_status").addClass("available");
    } else {
        $("div#api_status").removeClass("available");     
    }
})
