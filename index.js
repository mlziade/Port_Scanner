const net = require('net')
const EventEmitter = require('events')
const hostUrl = process.argv[2]
const startingPort = Number(process.argv[3])
const endingPort = Number(process.argv[4])

const ports = {}

const running = new EventEmitter({})

for (let i = startingPort; i<= endingPort; i++){
    ports[i] = {
        status: ''     
    }
    const socket = net.createConnection({host: hostUrl, port: i}, () => {
        console.log(`port ${i} successfully connected`)
        ports[i].status = 'open'
        if(i === endingPort){
            running.emit('finished')
        }
        socket.end()
    })
    socket.setTimeout(10000, () => {
        console.log(`port ${i} received idle timeout`)
        ports[i].status = 'filtered'
        if(i === endingPort){
            running.emit('finished')
        }
        socket.end()
    })
    socket.on('error', (err)=> {
        console.log(`port ${i} received err: ${err.message}`)
        ports[i].status = 'closed'
        if(i === endingPort){
            running.emit('finished')
        }
        socket.end()
    })
}


running.on('finished', ()=> {

    console.table(ports)
})