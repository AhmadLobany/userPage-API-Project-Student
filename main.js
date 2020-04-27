let manager = new APIManager;
let renderer = new Renderer();

let data = manager.loadData();

renderer.render(data)


$('#load-but').on('click', function () {
    data = manager.loadData();
})


$('#display-but').on('click', function () {
    renderer.render(data);
})

$('#save-user-but').on('click', function () {
    localStorage.setItem('data', JSON.stringify(data))
})

$('#load-user-but').on('click', function () {
    data = JSON.parse(localStorage.getItem('data'))
    renderer.render(data);
})




