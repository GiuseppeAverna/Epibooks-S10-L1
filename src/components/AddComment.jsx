import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      rate: 1,
      comment: "",
      elementId: this.props.asin,
    },
  };

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state.comment);
        }}
      >
        <Form.Control
          value={this.state.comment.comment}
          onChange={(e) => {
            this.setState({
              comment: {
                ...this.state.comment,
                comment: e.target.value,
              },
            });
          }}
        />
        <Form.Select
          value={this.state.comment.comment}
          onChange={(e) => {
            this.setState({
              comment: {
                ...this.state.comment,
                rate: e.target.value,
              },
            });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        <Button type="submit">INVIA</Button>
      </Form>
    );
  }
}

export default AddComment;
