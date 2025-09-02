import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export function AccountMenu() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('login')
    navigate('/sign-in', { replace: true })
  }

  return (
    <Button
      className="text-foreground dark:text-foreground"
      onClick={handleLogout}
    >
      Sair
    </Button>
  )
}
