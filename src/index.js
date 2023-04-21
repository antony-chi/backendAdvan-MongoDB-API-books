import app from './server.js'

async function runServer(){
    await app.listen(app.get('port'));
    console.log('server ready', app.get('port'))
}

runServer()