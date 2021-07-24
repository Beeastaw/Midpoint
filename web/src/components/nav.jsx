import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import style from '../styles/nav.module.scss'
import '../styles/nav.module.scss'

export default function Nav() {
  const { user, logout } = useAuth()
  let location = useLocation()

  return (
    <nav className={style.nav} id={location.pathname === '/myprofile' || location.pathname === '/groups' || location.pathname === '/map' || location.pathname === '/map' ? style.active : ""}>
      <img src='/MidpointLogo.png' id={style.navLogo} alt='logo' />
      <ul className={style.navItems}>
        <Link to='/' className={style.navItem}><li>Home</li></Link>
        <Link to='/about' className={style.navItem}><li>About</li></Link>
        {user
          ? <Link to='/myprofile' className={style.navItem}>Dashboard</Link>
          : null
        }

        {user
          ? <Link to='/' className={style.navItem}><li onClick={logout}>Logout</li></Link>
          : <Link to='/login' className={style.navItem}><li>Login</li></Link>
        }
      </ul>
    </nav>
  )
}
