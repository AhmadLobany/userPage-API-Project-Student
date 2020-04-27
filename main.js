let manager = new APIManager;
let renderer = new Renderer();

 manager.loadData();
 let data = manager.getData();

renderer.render(data)


$('#load-but').on('click', function () {
    manager.loadData();
    data = manager.getData();
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




