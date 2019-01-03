module.exports = getPosition

function getPosition (oncursor) {
  getPositionRetry(true, oncursor)
}

function getPositionRetry (retry, oncursor) {
  process.stdin.setRawMode(true)
  process.stdin.on('data', ondata)
  process.stdout.write('\u001b[6n')
  const written = process.stdout.bytesWritten

  function ondata (data) {
    if (data[0] !== 0x1b && data[1] !== 0x5b) return
    process.stdin.setRawMode(false)
    process.stdin.removeListener('data', ondata)
    if (written !== process.stdout.bytesWritten && retry) return getPositionRetry(false, oncursor)
    const [ y, x ] = data.slice(2, data.length - 1).toString().split(';').map(Number)
    oncursor(x - 1, y - 1)
  }
}
