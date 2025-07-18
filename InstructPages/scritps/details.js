document.querySelectorAll('.details-js').forEach(details => {
  const summary = details.querySelector('summary');
  const contents = details.querySelectorAll('[class^="content"]');

  contents.forEach(content => {
    content.style.maxHeight = details.open ? content.scrollHeight + 'px' : '0';
  });

  summary.addEventListener('click', (e) => {
    e.preventDefault();

    if (details.open) {
      contents.forEach(content => {
        content.style.maxHeight = '0';
      });
      setTimeout(() => {
        details.removeAttribute('open');
      }, 300);
      return;
    }

    document.querySelectorAll('.details-js').forEach(otherDetails => {
      if (otherDetails !== details && otherDetails.open) {
        const otherContents = otherDetails.querySelectorAll('[class^="content"]');
        otherContents.forEach(otherContent => {
          otherContent.style.maxHeight = '0';
        });
        setTimeout(() => {
          otherDetails.removeAttribute('open');
        }, 300);
      }
    });

    details.setAttribute('open', '');
    contents.forEach(content => {
      content.style.maxHeight = content.scrollHeight + 'px';
    });
  });
});