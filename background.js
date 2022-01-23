const titleToMarkdown = async () => {
  let tabs = await browser.tabs.query({
    active: true,
    currentWindow: true,
  });

  let tab = tabs[0];

  let result = `[${tab.title}](${tab.url})`;
  navigator.clipboard.writeText(result).then(
    async () => {
      // await browser.tabs.create({ url: "index.html" });
      await browser.notifications.create({
        type: "basic",
        title: "🎉 Sucess!",
        message:
          " Successfully copy the title and URL for this page to your clipboard!",
      });
    },
    function () {
      /* clipboard write failed */
    }
  );
};

browser.browserAction.onClicked.addListener(titleToMarkdown);
