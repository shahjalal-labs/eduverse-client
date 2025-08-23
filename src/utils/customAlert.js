import Swal from "sweetalert2";

const customAlert = ({
  title = "Success!",
  text = "You have successfully Submitted!",
  icon = "success",
  timer = 1500,
  showConfirmButton = false,
  showCloseButton = false,
}) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton,
    timer,
    showCloseButton,
    timerProgressBar: true,
  });
};

export default customAlert;
