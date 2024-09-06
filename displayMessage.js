function displayMessage(ship, text, duration = 3000) {
    if (ship.custom.msgTimeout) clearTimeout(ship.custom.msgTimeout);
    ship.setUIComponent({
        id: "message",
        position: [25, 82, 50, 5],
        visible: true,
        components: [
            {
                type: "text",
                position: [0, 0, 100, 100],
                color: "hsl(0, 100%, 75%)",
                value: text,
                align: "center",
            }
        ]
    });
    ship.custom.msgTimeout = setTimeout(() => {
        ship.setUIComponent({ id: "message", visible: false });
        delete ship.custom.msgTimeout;
    }, duration);
}
