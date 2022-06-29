import Home from "./Routes/Home/Home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import Authentication from "./Routes/Authentication/Authentication";

const Shop = () => {
  return <h1>Hello There I am Lkahsya</h1>
}
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />} />
        <Route path="auth" element = {<Authentication />} />

      </Route>


    </Routes>
  )
}

export default App;
