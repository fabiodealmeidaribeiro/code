let getID = (element) => { return window.document.getElementById(element); }
const screen = getID('screen');
const context = screen.getContext('2d');
const currentPlayer = 'player1';
let createGame = () => {
    const state = {
        players : {
            'player1' : { x : 1, y : 1, c : 'black', },
            'player2' : { x : 9, y : 9, c : 'black', },
        },
        fruits : {
            'fruit1' : { x : 3, y : 3, c : 'green', },
        },
    }
    let movePlayer = (command) => {
        console.log({
            'moving' : command['playerID'],
            'with' : command['keyPressed'],
        });
        const keyPressed = command['keyPressed'];
        const player = state['players'][command['playerID']];
        if (keyPressed === 'ArrowUp' && Number(player['y'] - 1) >= 0) {
            player['y']--;
            return
        } else if (keyPressed === 'ArrowRight' && Number(player['x'] + 1) < Number(screen['width'])) {
            player['x']++;
            return
        } else if (keyPressed === 'ArrowDown' && Number(player['y'] + 1) < Number(screen['height'])) {
            player['y']++;
            return
        } else if (keyPressed === 'ArrowLeft' && Number(player['x'] - 1) >= 0) {
            player['x']--;
            return
        }
    }
    return {
        movePlayer,
        state : state,
    }
}
const game = createGame();
// let renderScreen = () => {
//     context.clearRect(0, 0, 10, 10);
//     for (const x in game['state']) {
//         for (const y in game['state'][x]) {
//             context.fillStyle = game['state'][x][y]['c'];
//             context.fillRect(game['state'][x][y]['x'], game['state'][x][y]['y'], 1, 1);
//         }
//     }
//     requestAnimationFrame(renderScreen);
// }
let renderScreen = () => {
    context.clearRect(0, 0, 10, 10);
    for (const playerID in game['state']['players']) {
        const player = game['state']['players'][playerID];
        context.fillStyle = 'black';
        context.fillRect(player['x'], player['y'], 1, 1);
    }
    for (const fruitID in game['state']['fruits']) {
        const fruit = game['state']['fruits'][fruitID];
        context.fillStyle = 'green';
        context.fillRect(fruit['x'], fruit['y'], 1, 1);
    }
    requestAnimationFrame(renderScreen);
}
renderScreen();
let createKeyboardListener = () => {
    const state = {
        observers : [],
    }
    let subscribe = (observerFunction) => {
        state.observers.push(observerFunction);
    }
    let notifyAll = (command) => {
        console.log({
            'notifying' : state.observers.length,
        });
        for (const observerFunction of state.observers) {
            observerFunction(command);
        }
    }
    let handleKeydown = (event) => {
        const keyPressed = event['key'];
        const command = {
            playerID : 'player1',
            keyPressed : keyPressed,
        }
        notifyAll(command);
    }
    document.addEventListener('keydown', handleKeydown);
    return {
        subscribe,
    }
}
const keyboardListener = createKeyboardListener();
// const network = createNetwork();
keyboardListener.subscribe(game.movePlayer);
// keyboardListener.subscribe(network.update);