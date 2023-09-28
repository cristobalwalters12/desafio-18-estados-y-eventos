import { Alert as BootstrapAlert } from "react-bootstrap";

function Alert(props) {
  return (
    <div className="mt-3">
      <BootstrapAlert variant={props.variant}>{props.text}</BootstrapAlert>
    </div>
  );
}
export default Alert;
<style></style>;
