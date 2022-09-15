import Link from 'next/link';
import styles from './Navbar.module.scss'

const Navbar = () => {

  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.left}>
          <Link href='/' className={styles.navbarItem}><a><h1>Retroview</h1></a></Link>
        </div>
        <div className={styles.right}>
          <Link href='/interviews' className={styles.navbarItem}><a><h1 className={styles.navItemTitle}>Interviews</h1></a></Link>
          <Link href='/skills' className={styles.navbarItem}><a><h1 className={styles.navItemTitle}>Skills</h1></a></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;