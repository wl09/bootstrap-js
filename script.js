function validateEmail(email) {
return email.includes("@") && email.includes(".");
}


const featuredEvents = [
    "FireKeepers Casino 400",
    "The French Open Women's Singles Final",
    "Event 3"
];
function getRandomFeaturedEvent() {
  const index = Math.floor(Math.random() * featuredEvents.length);
   return featuredEvents[index];
}

function calculateTotalPrice(tickets) {
  return tickets.reduce((total, ticket) => total + (ticket.price * ticket.quantity), 0);
}


// 3. Add Feedback Message (store user feedback)
let feedbackMessages = [];
function addFeedback(message) {
  feedbackMessages.push(message);
  return feedbackMessages;
}
