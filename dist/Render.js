class Render {
   
    rendering(data) {
        const source = $(`#recipe-template`).html()
        const template = Handlebars.compile(source)
        const newHTML = template({data})
        $(`#recipes`).empty().append(newHTML)

    }
}
 
