window.addEventListener("DOMContentLoaded", () => {
  const options = { weekday: "short", month: "long", day: "numeric" };
  let today = new Date();
  today.toLocaleString("nl", options);

  const welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.innerText = `Today is Saturday 11th of May.\n\nYou have 5 unread Trello mentions, 3 Google Calender entries and will be working on 4 project(s) today.`;
});
