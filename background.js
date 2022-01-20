const titleToMarkdown = async () => {
  let tabs = await browser.tabs.query({
    active: true,
  });

  let tab = tabs[0];

  let result = `[${tab.title}](${tab.url})`;
  navigator.clipboard.writeText(result).then(
    function () {
      /* clipboard successfully set */
    },
    function () {
      /* clipboard write failed */
    }
  );
};

browser.browserAction.onClicked.addListener(titleToMarkdown);
