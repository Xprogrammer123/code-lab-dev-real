const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "What is your Plan for today",
  "Feel free to ask me any questions",
  "What do you want to know about TeleChat",
  "Hi, how are you?",
  "Ohh... I can't understand what you are trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "Client";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse(msgText);
});

function appendMessage(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg" ondblclick="handleDoubleClick(event)">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
  saveChat();
}

function botResponse(userText) {
  let msgText = BOT_MSGS[random(0, BOT_MSGS.length - 1)];

  if (userText.toLowerCase().includes("telechat")) {
    msgText = "TeleChat is an advanced messaging platform.";
  } else if (userText.toLowerCase().includes("plan")) {
    msgText = "I have no plans, but I can help you make one.";
  } // Add more conditions as needed

  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

function handleDoubleClick(event) {
  const menu = document.createElement("div");
  menu.className = "context-menu";
  menu.innerHTML = `
    <button onclick="copyText(event)">Copy</button>
    <button onclick="selectAllText(event)">Select All</button>
    <button onclick="deleteText(event)">Delete</button>
    <button onclick="emojiReact(event, '👍')">👍</button>
    <button onclick="emojiReact(event, '😂')">😂</button>
    <button onclick="emojiReact(event, '❤️')">❤️</button>
  `;
  document.body.appendChild(menu);
  menu.style.top = event.clientY + "px";
  menu.style.left = event.clientX + "px";
  menu.targetMsg = event.target.closest('.msg');

  menu.style.opacity = 0;
  menu.style.transition = "opacity 0.2s";
  setTimeout(() => {
    menu.style.opacity = 1;
  }, 0);

  document.addEventListener("click", () => {
    if (menu) menu.remove();
  });
}

function copyText(event) {
  const text = event.target.closest(".context-menu").targetMsg.querySelector(".msg-text").innerText;
  navigator.clipboard.writeText(text);
}

function selectAllText(event) {
  const textElem = event.target.closest(".context-menu").targetMsg.querySelector(".msg-text");
  const range = document.createRange();
  range.selectNodeContents(textElem);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

function deleteText(event) {
  const msg = event.target.closest(".context-menu").targetMsg;
  msg.remove();
  saveChat();
}

function emojiReact(event, emoji) {
  const msg = event.target.closest(".context-menu").targetMsg.querySelector(".msg-text");
  msg.innerText += ` ${emoji}`;
  saveChat();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  saveChat();
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function saveChat() {
  localStorage.setItem("chaat", msgerChat.innerHTML);
}

function loadChat() {
  const savedChat = localStorage.getItem("chaat");
  if (savedChat) {
    msgerChat.innerHTML = savedChat;
  }
}

loadChat();
