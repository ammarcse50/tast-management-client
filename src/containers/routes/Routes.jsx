import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layout/Main";
import AllTask from "../../components/pages/Home/RightSide/Alltask/AllTask"
import CompletedTask from "../../components/pages/Home/RightSide/CompletedTask/CompletedTask"
import Important from "../../components/pages/Home/RightSide/ImportantTask/Important";
import Mustdo from "../../components/pages/Home/RightSide/MustDo/Mustdo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

    { path : "/" ,

     element: <AllTask></AllTask>
},
    { path : "/alltask" ,

     element: <AllTask></AllTask>
},
    { path : "/completedtask" ,

     element: <CompletedTask/>
}
,
    { path : "/importanttask" ,

     element: <Important/>
}
,
    { path : "/mustdo" ,

     element: <Mustdo/>
}

    ],
  },
]);

export default router;
