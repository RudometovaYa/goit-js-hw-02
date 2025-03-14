function checkForSpam(message) {
  let massageLowerCase = message.toLowerCase();
  if (massageLowerCase.includes(`spam`) || massageLowerCase.includes(`sale`)) {
    return true;
  } else {
    return false;
  }
}
