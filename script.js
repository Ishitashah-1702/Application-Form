

function submitForm() {
  const form = document.getElementById("myForm");

  if (form.checkValidity()) {
    // Show notification
    const notification = document.getElementById("notification");
    notification.classList.remove("hidden");

    // // Optional: hide notification after a few seconds
    // setTimeout(() => {
    //   notification.classList.add("hidden");
    // }, 3000);

    // You can also reset the form if needed:
    // form.reset();
  } else {
    alert("Please fill out all required fields correctly.");
    form.reportValidity();
  }
}

function  toggleDarkMode(){
    document.body.classList.toggle("dark-mode");
}