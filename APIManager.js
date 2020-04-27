class APIManager {
    constructor() {
        this.data = {};
    }

    loadData() {

        let self = this;

        let userInfo = {};

        $.ajax({ //load user's info 
            type: 'GET',
            async: false,
            url: `https://randomuser.me/api/`,
            success: function (data) {
                userInfo.name = data.results[0].name.title + " " + data.results[0].name.first + " "
                    + data.results[0].name.last;
                userInfo.location = data.results[0].location.city + " , " + data.results[0].location.country;
                userInfo.image = data.results[0].picture.large;
                self.data.userInfo = userInfo;
            }
        });


        $.ajax({  //load quote
            type: 'GET',
            async: false,
            url: `https://api.kanye.rest`,
            success: function (data) {
                self.data.quote = data.quote;
            }
        });


        $.ajax({ //load meat description
            type: 'GET',
            async: false,
            url: `https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`,
            success: function (data) {
                self.data.meat = data;
            }
        });


        let randNum = Math.floor(Math.random() * 719) + 1;  // Random number 1-721 to pick pokemon randomly
        $.ajax({ //load pokemon
            type: 'GET',
            async: false,
            url: `https://pokeapi.co/api/v2/pokemon/${randNum}/`,
            success: function (data) {
                self.data.pokemonImage = data.sprites.front_default;
                self.data.pokemonText = 'Favorite Pokemon:   ' + data.name;
            }
        });



        for (let i = 0; i < 6; i++) //load 6 friends
            $.ajax({
                type: 'GET',
                async: false,
                url: `https://randomuser.me/api/`,
                success: function (data) {
                    self.data[`friend${i + 1}`] = data.results[0].name.first + " "
                        + data.results[0].name.last;
                }
            });


        return this.data;
        
    }

}
