class APIManager {
    constructor() {
        this.data = {};
        this.data.friends = [];
    }

    setUserinfo() { //Load user's info 
        let userInfo = {};
        $.ajax({
            type: 'GET',
            url: `https://randomuser.me/api/`,
            success: (data) => {
                userInfo.name = data.results[0].name.title + " " + data.results[0].name.first + " "
                    + data.results[0].name.last;
                userInfo.location = data.results[0].location.city + " , " + data.results[0].location.country;
                userInfo.image = data.results[0].picture.large;
                this.data.userInfo = userInfo;
            }
        });
    }

    setQuote() { //Load quote
        $.ajax({
            type: 'GET',
            url: `https://api.kanye.rest`,
            success: (data) => {
                this.data.quote = data.quote;
            }
        });

    }


    setMeatDescr() {    //Load meat description
        $.ajax({
            type: 'GET',
            url: `https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`,
            success: (data) => {
                this.data.meat = data;
            }
        });
    }


    setPokemon() { //Load pokemon
        let randNum = Math.floor(Math.random() * 719) + 1;  // Random number 1-721 to pick pokemon randomly
        $.ajax({ 
            type: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${randNum}/`,
            success: (data)=> {
                this.data.pokemonImage = data.sprites.front_default;
                this.data.pokemonText = 'Favorite Pokemon:   ' + data.name;
            }
        });
    }
     
    removeFriends () {
        this.data.friends = [];
    }

    addFriend() { 
            $.ajax({
                type: 'GET',
                url: `https://randomuser.me/api/`,
                success:  (data) => {
                    let friend = {
                        name: data.results[0].name.first + " "
                            + data.results[0].name.last
                    };
                    this.data.friends.push(friend);
                }
            });
    }


    getData() {
        return this.data;
    }

}
