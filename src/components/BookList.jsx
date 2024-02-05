import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row className="g-2 mt-3">
          <Col xs={6} md={6} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Row className="g-2 mt-3">
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={6} md={6} key={b.asin}>
                    <SingleBook book={b} />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col xs={6}>
            {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
