import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.commentsToShow.map((comment) => (
        <ListGroup.Item key={comment._id}>
          {comment.rate} - {comment.comment}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;
