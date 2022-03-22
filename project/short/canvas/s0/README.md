let renderScreen = () => {
    context.clearRect(0, 0, 10, 10);
    for (const x in state) {
        for (const y in state[x]) {
            context.fillStyle = state[x][y]['c'];
            context.fillRect(state[x][y]['x'], state[x][y]['y'], 1, 1);
        }
    }
    requestAnimationFrame(renderScreen);
}