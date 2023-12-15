import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Shop, Register, Contact , Login, Blog, Home, Pages, Errors } from "./pages";


const router = createBrowserRouter([
  { path:"/",
  element: <Home />,
  errorElement: < Errors/>,
children:[
  

  { path:"/about",
  element: <About />,
  errorElement: <Errors />,
  


  },

  
  { path:"/shop",
  element: <Shop />,

  },

  { path:"/pages",
  element: <Pages />,

  },
 
  { path:"/ blog",
  element: <Blog/>,

  },
  { path:"/contact",
  element: <Contact />,

  },

]
},
  

  { path:"/ login",
  element: <Login />,

  },

 
  { path:"/ register",
  element: <Register/>,

  },



]);
function App() {
  return (
    <RouterProvider router={router}> 
    <div className="App">
     
    </div>
    </RouterProvider>
  );
}

export default App;
