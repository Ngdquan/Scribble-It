class Players {
    constructor(){
        this.players = []
    }

    addPlayer(id,name,room){
        let player = {
            id: id,
            name: name,
            room: room,
            host: false,
            turn: false
        }
        this.players.push(player);
        return player;
    }

    getPlayersList(room){
        let players = this.players.filter((player)=>player.room === room)
        let playersName = players.map((player)=>player.name);
        return playersName;
    }

    getPlayerById(id){
        let player = this.players.filter((player)=> player.id === id)[0];
        return player
    }

    removePlayer(id){
        let player = this.getPlayerById(id)

        if (player) {
            this.players = this.players.filter((player)=> player.id !== id)
            return player;
        }
    }
}

module.exports = {Players};