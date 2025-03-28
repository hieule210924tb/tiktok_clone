import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "~/routes";
import { DefaultLayout } from '~/component/Layout';
import Upload from "./pages/Upload";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }
              return <Route key={index} path={route.part}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                } />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
