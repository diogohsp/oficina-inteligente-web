import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { Home } from './pages/app/dashboard/home'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import DesenvolvimentoInfantil from './pages/app/materias/desenvolvimento-infantil'
import Matematica from './pages/app/materias/matematica'
import Portugues from './pages/app/materias/portugues'
import Inclusivas from './pages/app/materias/inclusivas'
import Ciencias from './pages/app/materias/ciencias'
import Historia from './pages/app/materias/historia'
import Geografia from './pages/app/materias/geografia'
import Ingles from './pages/app/materias/ingles'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <Home /> }, // Dashboard na raiz "/"
      { path: 'pedidos', element: <Orders /> }, // "/pedidos"
      {
        path: 'materias/desenvolvimento-infantil',
        element: <DesenvolvimentoInfantil />,
      },
      { path: 'materias/matematica', element: <Matematica /> },
      { path: 'materias/portugues', element: <Portugues /> },
      { path: 'materias/inclusivas', element: <Inclusivas /> },
      { path: 'materias/ciencias', element: <Ciencias /> },
      { path: 'materias/historia', element: <Historia /> },
      { path: 'materias/geografia', element: <Geografia /> },
      { path: 'materias/ingles', element: <Ingles /> },
    ],
  },
  {
    path: '',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> }, // "/sign-in"
      { path: 'sign-up', element: <SignUp /> }, // "/sign-up"
    ],
  },
])
