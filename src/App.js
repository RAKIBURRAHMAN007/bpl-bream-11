

import { toast } from 'react-toastify';

function showSuccessToast(name) {
  toast.success(`Congrates !! ${name} is now in your squad`);
}

function showErrorToast() {
  toast.error("Not enough money to buy this player. claim some credit");
}
function showErrorToast2() {
    toast.error("Player already selected");
  }
  
function showWarningToast() {
  toast.warn("Player removed");
}
function showWarningToast3() {
    toast.warn("Player limit reached! Cannot add more than 6 players.");
  }



export { showSuccessToast, showErrorToast, showWarningToast, showErrorToast2 ,showWarningToast3 };
