let manager = new APIManager;
let renderer = new Renderer();
let data;


$('#load-but').on('click', function () {
    for(let i=0;i<6;i++) manager.addFriend();
    manager.setUserinfo();
    manager.setQuote();
    manager.setMeatDescr();
    manager.setPokemon();
    manager.removeFriends();
    data = manager.getData();
})


$('#display-but').on('click', function () {
     data = manager.getData();
     renderer.render(data);
})

$('#save-user-but').on('click', function () {
    localStorage.setItem('data', JSON.stringify(data))
})

$('#load-user-but').on('click', function () {
    data = JSON.parse(localStorage.getItem('data'))
    renderer.render(data);
})




