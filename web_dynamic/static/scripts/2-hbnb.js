.ready(() => {
    let list = {}
    .on("click", () => {
        .each(() => {
            if (this.checked) {
                list[.data("id")] = .data("name");
            } else {
                delete list..data("id")
            }
        })
    })

    if (Object.values(list).length > 0) {
        .text(Object.values(list).join(", "))
    } else {
        .html("&nbsp;")
    }
})

$.get("http://0.0.0.0:5001/api/v1/status/", (data, res) => {
    if (data.status === 'OK') {
        .addClass("available");
    } else {
        .removeClass("available");     
    }
})
