import { Image, Prices, Title } from './styles'
import bannerImg from '../../assets/images/spider-man-banner.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Game of the Day</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
      <Button type="link" to="/product" title="Click here to get this offer">
        Get Offer
      </Button>
    </div>
  </Image>
)

export default Banner
