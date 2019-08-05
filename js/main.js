document.getElementById('send').onclick = () => {
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  if (email.value != '' && subject.value != '' && message.value != '') {
    document.getElementById('thanks').classList.remove('hide');
  }
};