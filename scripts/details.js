document.querySelectorAll('.details-js').forEach(details => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.content');

  summary.addEventListener('click', (e) => {
    e.preventDefault();

    if (details.open) {
      content.style.maxHeight = content.scrollHeight + 'px';
      setTimeout(() => {
        content.style.maxHeight = '0';
      }, 10);
      setTimeout(() => details.removeAttribute('open'), 310);
      return;
    }

    document.querySelectorAll('.details-js').forEach(otherDetails => {
      if (otherDetails !== details && otherDetails.open) {
        const otherContent = otherDetails.querySelector('.content');
        otherContent.style.maxHeight = otherContent.scrollHeight + 'px';
        setTimeout(() => {
          otherContent.style.maxHeight = '0';
        }, 10);
        setTimeout(() => otherDetails.removeAttribute('open'), 310);
      }
    });

    details.setAttribute('open', '');
    content.style.maxHeight = content.scrollHeight + 'px';
  });
});
