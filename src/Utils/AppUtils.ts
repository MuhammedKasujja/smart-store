import Swal from "sweetalert2";

interface IAlertProps {
    callback: (...arg: any) => void
}

type AlertType = 'error' | 'success'

class AppUtils{
    private constructor(){

    }

    static showAlert({ callback }: IAlertProps) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                callback()
            }
        });
    }

    static showNotification(message: string, type: AlertType) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            timer: 3000,
            showConfirmButton: false,
            timerProgressBar: true,
            customClass: {
              container: "fancy-popup",
              popup: type === "success" ? "popup-success" : "popup-error"
            },
            icon: type
          });
          Toast.fire({
            title: message
          });
    }
}

export default  AppUtils