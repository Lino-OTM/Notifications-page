const markAllAsRead         = document.querySelector(".notifications-wrapper__hero-mark-as-read"),
      notificationsIcon     = document.querySelectorAll(".notification-wrapper__notification-icon"),
      unreadNotifications   = document.querySelectorAll(".notification-wrapper--not-checked");

let notificationsAmmount    = document.querySelector(".notifications-wrapper__hero-notifications-amount");

markAllAsRead.addEventListener("click", () => {

unreadNotifications.forEach((e) => {
  e.classList.remove("notification-wrapper--not-checked");
}),
notificationsIcon.forEach((e) => {
  e.style.opacity = 0;
}),
notificationsAmmount.innerHTML = 0;
})
