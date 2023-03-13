import { Col, Row } from 'react-bootstrap'
import * as ITEMS from '../data/items.json'
import { MenuItem } from "../components/menuItem"

export function Home() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {ITEMS.map(item => (
          <Col key={item.id}>
            <MenuItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}