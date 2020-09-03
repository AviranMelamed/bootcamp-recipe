const render = new Render()


const fetch = function() {
    const input = $(`#input`).val().toLocaleLowerCase()
    $.get(`/recipes/${input}`, function (data) {
        render.rendering(data)
    })
}
