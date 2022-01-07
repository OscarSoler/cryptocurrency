import MainLayout from "layout/MainLayout"
import Detail from "pages/Detail"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"

const RoutesTree = () => {
	return (
		<Router>
			<MainLayout>
				<Switch>
					<Route exact component={Home} path="/" />
					{/* <Route path="/detail" component={Detail} /> */}
					<Route exact component={Detail} path="/coins/:id" />
				</Switch>
			</MainLayout>
		</Router>
	)
}

export default RoutesTree
