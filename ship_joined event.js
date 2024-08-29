// This code triggers a `ship_joined` event when a new ship joins the game.
// for team-mods (root_mode: "team")

this.options = {
    root_mode: "team",
    map_size: 30,
    friendly_colors: 2
};

const joinedShips = new Set();

const shipsProxy = new Proxy(game.ships, {
    set: (target, property, value) => {
        setTimeout(() => {
            const ship = game.findShip(value);

            if (ship && !joinedShips.has(ship.id)) {
                joinedShips.add(ship.id);

                this.event({ name: 'ship_joined', ship: ship }, game);
            }
        }, 100);

        return Reflect.set(target, property, value);
    }
});
game.ships = shipsProxy;

this.event = function (event, game) {
    switch (event.name) {
        case "ship_joined":
            echo(event.ship.name + " just joined the game");
            break;
    }
};
