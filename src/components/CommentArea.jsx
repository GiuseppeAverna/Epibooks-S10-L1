import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  retrieveComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMwZjBiMmUwODVmYTAwMTk2MzFhODEiLCJpYXQiOjE3MDcxNDMzNDYsImV4cCI6MTcwODM1Mjk0Nn0.UYl95GsZSM7McSscJlVxr5DX1s0JyVVHYvvrIQ13oIo",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero commenti");
        }
      })
      .then((arrayOfComments) => {
        console.log(arrayOfComments);
        this.setState({
          comments: arrayOfComments,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.retrieveComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin) {
      this.retrieveComments();
    }
  }

  render() {
    return (
      <div>
        <CommentList commentsToShow={this.state.comments} />
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
