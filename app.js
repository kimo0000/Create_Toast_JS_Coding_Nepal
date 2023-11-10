const notification = document.querySelector(".notification"),
  btns = document.querySelectorAll(".btns");

let timer = null;

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-solid fa-check",
    text: "this is toast success",
  },
  error: {
    icon: "fa-solid fa-xmark",
    text: "this is toast error",
  },
  warning: {
    icon: "fa-solid fa-triangle-exclamation",
    text: "this is toast warning",
  },
  info: {
    icon: "fa-solid fa-circle-info",
    text: "this is toast info",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  setTimeout(() => toast.remove(), 500);
};

const createToast = (id) => {
  const { icon, text } = toastDetails[id];
  const liElement = document.createElement("li");
  liElement.className = `toast ${id}`;
  liElement.innerHTML = `<div class="icon">
            <i class="${icon}"></i>
            <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentNode)"></i>`;

  notification.appendChild(liElement);

  timer = setTimeout(() => removeToast(liElement), toastDetails.timer);
};

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => createToast(e.target.id))
);
