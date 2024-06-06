import { Outlet } from 'react-router-dom'
import { Car } from 'lucide-react'

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Car className="h-5 w-5" />
          <span className="font-semibold">Couto Pneus</span>
        </div>
        <footer className="text-sm">
          &copy; Oficina.Inteligente - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
