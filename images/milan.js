
  function sendMessageToWhatsApp(phoneNumber) {
    var message = "Hello, I would like to order.";

    // Replace spaces with %20 for URL
    message = encodeURIComponent(message);

    var url = "https://wa.me/" + phoneNumber + "?text=" + message;

    window.open(url, '_blank');
  }



