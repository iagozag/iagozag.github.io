let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Contagem, Minas Gerais',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },
          {
            name: "telegram",
            url: "https://web.telegram.org",
            icon: "brand-telegram",
            icon_color: "#7daea3",
          },
		  {
		    name: "linkedin",
		    url: "https://www.linkedin.com/feed/",
		    icon: "brand-linkedin",
		    icon_color: "#7daea3",
		  },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#d2b43f",
          },
          {
            name: "typeracer",
            url: "https://play.typeracer.com/",
            icon: "keyboard",
            icon_color: "#e78a4e",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "betteranime",
            url: "https://betteranime.net/",
            icon: "brand-bilibili",
            icon_color: "#2d6ade",
          },
        ],
      }],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "school",
          links: [
            {
              name: "minhaufmg",
              url: "https://sistemas.ufmg.br/",
              icon: "trees",
              icon_color: "#a9b665",
            },
            {
              name: "moodle",
              url: "https://virtual.ufmg.br/minhasturmas/",
              icon: "school",
              icon_color: "#ea6962",
            },
			{
              name: "listaufmg",
              url: "https://docs.google.com/spreadsheets/d/1QQ1QvYNDPKv9Aqh5c2VL_KCtpqASDWeRcLkyyXlPM0M/edit?gid=1810604804#gid=1810604804",
              icon: "brackets-contain",
              icon_color: "#4aa272",
            },
          ],
        },
        {
          name: "competitive programming",
          links: [
            {
              name: "codeforces",
              url: "https://codeforces.com/",
              icon: "chart-bar",
              icon_color: "#fdd776",
            },
            {
              name: "atcoder",
              url: "https://atcoder.jp/",
              icon: "brain",
              icon_color: "#ab5c84",
            },
            {
              name: "kenkoo",
              url: "https://kenkoooo.com/atcoder/#/table/iagozag",
              icon: "packages",
              icon_color: "#a9b665",
            },
            {
              name: "usaco",
              url: "https://usaco.guide/dashboard",
              icon: "binary-tree-2",
              icon_color: "#65a0d9",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "webmaildcc",
              url: "https://webmail.dcc.ufmg.br/",
              icon: "webhook",
              icon_color: "#918e87",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/1/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "translate",
              url: "https://www.google.com/search?client=firefox-b-d&q=translate",
              icon: "language",
              icon_color: "#7daea3",
            },
			{
              name: "ilovepdf",
              url: "https://www.ilovepdf.com/",
              icon: "file-type-pdf",
              icon_color: "#d1524e",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
