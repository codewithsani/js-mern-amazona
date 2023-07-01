import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export default function MessageBox(props) {
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}

MessageBox.propTypes = {
  variant: PropTypes.string.isRequired, // Add the missing prop type validation
  children: PropTypes.string.isRequired, // Add the missing prop type validation
};
