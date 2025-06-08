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
