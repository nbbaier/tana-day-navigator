const pushButton = (direction) => {
  const buttons = document.getElementsByTagName("button");

  console.log(direction);
  console.log("Number of buttons =", buttons.length);

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent.includes(direction)) {
      buttons[i].click();
      break;
    }
  }
};

document.addEventListener("keydown", function (event) {
  const isPreviousDay = event.code === "BracketLeft";
  const isNextDay = event.code === "BracketRight";

  if (event.altKey && event.metaKey && event.shiftKey && event.ctrlKey) {
    if (isPreviousDay) {
      pushButton("Previous day");
    } else if (isNextDay) {
      pushButton("Next day");
    }
  }
});
