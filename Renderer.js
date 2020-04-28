class Renderer {
    constructor() {
    }

    renderUserInfo() {
        const source = $('#user-template').html();
        const template = Handlebars.compile(source)
        $(".user-container").empty();
        const newHTML = template(this.data.userInfo);
        $('.user-container').append(newHTML);
    }

    renderQuote() {
        const source = $('#quote-template').html();
        const template = Handlebars.compile(source)
        $(".quote-container").empty();
        const newHTML = template(this.data);
        $('.quote-container').append(newHTML);
    }

    renderPokemon() {
        const source = $('#pokemon-template').html();
        const template = Handlebars.compile(source)
        $(".pokemon-container").empty();
        const newHTML = template(this.data);
        $('.pokemon-container').append(newHTML);
    }


    renderMeat() {
        const source = $('#meat-template').html();
        const template = Handlebars.compile(source)
        $(".meat-container").empty();
        const newHTML = template(this.data);
        $('.meat-container').append(newHTML);
    }

    renderFriends() {
        const source = $('#friends-template').html();
        const template = Handlebars.compile(source)
        $(".friends-container").empty();
        const newHTML = template({ friends: this.data.friends });
        $('.friends-container').append(newHTML);
    }

    render(_data) {
        this.data = _data;
        this.renderPokemon();
        this.renderMeat();
        this.renderQuote();
        this.renderUserInfo();
        this.renderFriends();
    }

}