
import app from './App'

const port = 3000
console.log("foobarbaz");
app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})