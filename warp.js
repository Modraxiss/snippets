function warp(ship) {
    const ships = game.ships;

    if (ships.length <= 1) return;

    let tp = (ship.custom.lastTeleported + 1) % ships.length || 0;

    if (ships[tp].id === ship.id) {
        tp = (tp + 1) % ships.length;
    }

    ship.custom.lastTeleported = tp;
    const targetShip = ships[tp];

    ship.set({
        x: targetShip.x,
        y: targetShip.y
    });
}
