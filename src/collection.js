const mails = {};

mails.going = function(id) {
  mails[id] = "going";
};

mails.sent = function(id) {
  mails[id] = "sent";
};

mails.error = function(id, error) {
  mails[id] = error;
};

module.exports = mails;