module.exports = Ferdi => {
  const getMessages = () => {
    let direct = 0;
    var directElements = document.querySelectorAll('.badge.highlight');

    for (const directElement of directElements) {
      if (directElement.textContent.length > 0) {
        direct += Ferdi.safeParseInt(directElement.textContent);
      }
    }

    let indirect = 0;
    const indirectElements = document.querySelectorAll(
      '.badge:not(.highlight)',
    );
    for (const indirectElement of indirectElements) {
      if (indirectElement.textContent.length > 0) {
        indirect++;
      }
    }
    Ferdi.setBadge(direct, indirect);
  };

  Ferdi.loop(getMessages);
};
