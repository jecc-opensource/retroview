import Link from 'next/link';
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <Link href='/'><a><h1>Retroview</h1></a></Link>
      </div>
    </nav>
  )
}

export default Navbar;