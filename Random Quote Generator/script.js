const quotes = [
  // Motivational
  "Start where you are. Use what you have. Do what you can.",
  "Small steps every day.",
  "Believe you can and you're halfway there.",
  "Dream big. Start small.",
  "Success is a series of small wins.",
  "Your only limit is you.",
  "Be stronger than your excuses.",
  "Do it until you’re proud.",
  "Consistency creates miracles.",
  "Rise and try again.",

  // Life
  "Life is a journey, not a race.",
  "Choose joy every day.",
  "Collect moments, not things.",
  "Let go to grow.",
  "Every day is a fresh start.",
  "Simplicity is beautiful.",
  "Be the energy you want to attract.",
  "One day at a time.",
  "Make peace with your past.",
  "Live the moment.",

  // Love
  "Love is felt more than it’s said.",
  "In your smile, I find peace.",
  "You feel like home.",
  "Love grows in small moments.",
  "With you, everything feels lighter.",
  "You’re my favorite place to go.",
  "Souls don’t meet by accident.",
  "Love begins with understanding.",
  "You’re the calm in my chaos.",
  "Every heartbeat is a story.",

  // Coding / Tech
  "Code. Test. Debug. Repeat.",
  "Eat. Sleep. Code. Repeat.",
  "Turning coffee into code.",
  "First, solve the problem. Then, write the code.",
  "Good code is simple code.",
  "Programming is thinking made visible.",
  "Don’t comment bad code — rewrite it.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Keep calm and code on.",
  "In code we trust.",

  // Attitude
  "Stay real. Stay kind.",
  "I’m not special, just limited edition.",
  "Prove them wrong.",
  "Be a voice, not an echo.",
  "Work hard in silence.",
  "I don’t chase. I attract.",
  "Focused and fearless.",
  "Make it happen.",
  "Walk like you own the room.",
  "Be your own competition."
];
const quote=document.getElementById("quote")
const setidx=new Set();
document.getElementById("btn").addEventListener("click",()=>{
        const q=generateQuote();  
        quote.innerHTML=q;
})

function generateQuote(){
    if(setidx.size>=quotes.length){
        setidx.clear();
    }
    while(true){
        const rand=Math.floor(Math.random()*quotes.length)
        if(setidx.has(rand)){
            continue;
        }
        setidx.add(rand);
        return quotes[rand];
    }
}