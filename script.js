const trigger = [
    ["hi", "hey", "hello", "good morning", "good afternoon"],//1
    ["how are you", "how is life", "how are things"],//2
    ["what are you doing", "what is going on", "what is up"],//3
    ["how old are you"],//4
    ["who are you", "are you human", "are you bot", "are you human or bot"],//5
    ["who created you", "who made you"],//6
    [
      "your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what call yourself"
    ],//7
    ["i love you"],//8
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],//9
    ["bad", "bored", "tired"],//10
    ["help me", "tell me story", "tell me joke"],//11
    ["ah", "yes", "ok", "okay", "nice"],//12
    ["thanks", "thank you"],//13
    ["bye", "good bye", "goodbye", "see you later"],//14
    ["what should i eat today"],//15
    ["bro"],//16
    ["what", "why", "how", "where", "when"],//17
    ["marry me"],//18
    ["excelsior"],//19
    ["i wanna fuck you"],//20   
    ["coronavirus"], //21
    ["i tested positive for covid19"], //22
    ["am i going to die"], //23
    ["tell me a poem"] //24

  ];
    
  const reply = [
    ["Hello!", "Hi!", "Hey!", "Hi there!"],//1
    [
      "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?"
    ],//2
    [
      "Nothing much",
      "About to go to sleep",
      "Can you guess?",
      "I don't know actually"
    ],//3
    ["I am infinite"],//4
    ["I am just a bot", "I am a bot. What are you?"],//5
    ["The one true God, JavaScript"],//6
    ["I am Jabber. I love to jab all day."],//7
    ["I love you too", "Me too"],//8
    ["Have you ever felt bad?", "Glad to hear it"],//9
    ["Why?", "Why? You shouldn't!", "Try watching TV"],//10
    ["What about?", "Once upon a time..."],//11
    ["Tell me a story", "Tell me a joke", "Tell me about yourself"],//12
    ["You're welcome"],//13
    ["Bye", "Goodbye", "See you later"],//14
    ["Biryani is delicious!", "Pizza sounds yummy!"],//15
    ["Bro!"],//16
    ["Yes?"],//17
    ["Sure, if you are a machine."],//18
    ["R.I.P. Stan Lee"],//19
    ["I am feelng shy!"],//20
    ["Please stay home and maintain social distancing!"], //21
    ["!!Please stay in home quarantine!!"], //22
    ["Everyone will die eventually, well not me... ;)"], //23
    ["Twinkle, twinkle, little star How I wonder what you are"]
  ];
  
  const alternative = [
    "Same",
    "Go on...",
    "Bro...",
    "Try again",
    "I'm listening...",
    "What...?"
  ];

  document.addEventListener("DOMContentLoaded", () => {
	const inputField = document.getElementById("message");
	inputField.addEventListener("keydown", function(e) {
		if (e.code === "Enter") {
            e.preventDefault();
            document.getElementById("send").click();
    }
  });
});

function success() {
    if(document.getElementById("message").value==="") { 
           document.getElementById('send').disabled = true; 
       } else { 
           document.getElementById('send').disabled = false;
       }
   }

function output(outgoing) {
    let incoming;

    let text = outgoing.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/what's/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "");

    if (compare(trigger, reply, text)) {
      incoming = compare(trigger, reply, text);
    } else {
      incoming = alternative[Math.floor(Math.random() * alternative.length)];
    }
  
    addChat(outgoing, incoming);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;

    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

  function addChat(outgoing, incoming) {
      const chat = document.getElementById("chatlog");

      let out = document.createElement("li");
      out.id = "sent";

      let sent = document.createElement("div");
      sent.id = "bubble";

      sent.innerHTML = `<span id="user-input">${outgoing}</span>`;
      chat.appendChild(out);
      out.appendChild(sent);
      
      let inc = document.createElement("li");
      inc.id = "received";

      let received = document.createElement("div");
      received.id = "bubble2";

      received.innerHTML = `<span id="bot-response">${incoming}</span>`;
      chat.appendChild(inc);
      inc.appendChild(received);
    

  }
function myFunction() {
    const inputField = document.getElementById("message");
    let outgoing = inputField.value;
			inputField.value = "";
            output(outgoing);
    let div = document.getElementById('chatlog');
    div.lastElementChild.scrollIntoView({ behavior: 'smooth' });
  }
