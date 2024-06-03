import { HeaderBar, LinkItem, Links, LinkCart } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/cart.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPLAY" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categories</a>
          </LinkItem>
          <LinkItem>
            <a href="#">News</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Offers</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - item(s)
      <img src={cart} alt="cart" />
    </LinkCart>
  </HeaderBar>
)

export default Header
