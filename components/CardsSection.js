// components/CardsSection.js
import { Card, Button } from 'react-bootstrap';
import styles from '../styles/CardsSection.module.css';

const CardsSection = () => {
  const cardsData = [
    {
      image: '/image1.jpg',
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      content: 'Content for card 1',
      buttonLink: '/link1',
    },
    // Add more card objects as needed
  ];

  return (
    <section className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardsData.map((card, index) => (
          <div className="col d-flex" key={index}>
            <Card className="flex-fill">
              <Card.Img variant="top" src={card.image} className={styles.cardImage} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
                <Card.Text>{card.content}</Card.Text>
                <Button href={card.buttonLink} variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardsSection;