import styles from './styles.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text } from '@chakra-ui/react';
import { useAuth } from '../../Contexts/AuthContext';
import { useBasket } from '../../Contexts/BasketContext';

const Navbar = () => {

    const {loggedIn,user}  = useAuth()
    const {items} = useBasket()

  return (
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className="logo">
            <Link to="/"><Text fontWeight="bold" fontSize="2xl">e-Commerce</Text></Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
           {
              items.length>0 && (
                 <Link to="/basket">
                    <Button  variant="solid" colorScheme="pink">
                       Basket ({items.length})
                    </Button>
                 </Link>
              )
           }
            {
                loggedIn ? (
                    <>
                       {
                          user.role==="admin" && (<Link to="/admin">
                             <Button variant="solid" colorScheme="red">Admin</Button>
                          </Link>)
                       }
                        <Link to="/profile">
                            <Button  variant="solid" colorScheme="facebook">Profile</Button>
                        </Link>
                    </>

                ) : (
                    <React.Fragment>
                        <Link to="/login">
                            <Button colorScheme="pink">Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button colorScheme="pink">Register</Button>
                        </Link>
                    </React.Fragment>

                )
            }

        </div>
      </nav>
  );
};

export default Navbar;