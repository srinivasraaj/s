const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const interest = String(formData.get('interest') || '').trim();
  const message = String(formData.get('message') || '').trim();

  const recipient = 'dileep.psdk@gmail.com';
  const subject = encodeURIComponent(`Portfolio enquiry: ${interest}`);
  const body = encodeURIComponent(
    `Hi Dileep,\n\nMy name is ${name}.\nEmail: ${email}\nI'm interested in: ${interest}\n\n${message || 'I would like to know more.'}\n\nThanks!`
  );

  formNote.textContent = 'Opening your email app with the message details…';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
