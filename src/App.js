// import axios from 'axios'
import './App.css'
import Router from './Router'

function App() {
  // const user_key = '8a7727042cb43b8d8db68815a4893f2b'
  // const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${user_key}&targetDt=20210202`
  // const getData = () => {
  //   axios
  //     .get(url)
  //     .then(res => console.log(res))
  //     .catch(e => console.log(e))
  // }
  // getData()
  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
