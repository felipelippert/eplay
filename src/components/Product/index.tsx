import Tag from '../Tag'
import { Card, Description, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <div>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </div>
    <Title>{title}</Title>

    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Description>{description}</Description>
  </Card>
)

export default Product
