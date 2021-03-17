module.exports={
  "title": "Accord Project",
  "tagline": "Documentation",
  "url": "https://docs.accordproject.org",
  "baseUrl": "/",
  "organizationName": "accordproject",
  "projectName": "techdocs",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js"
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "taglineLead": "Open Source",
    "users": [
      {
        "caption": "Clause Inc.",
        "image": "img/clause-logo-sm.png",
        "infoLink": "http://clause.io",
        "pinned": true
      },
      {
        "caption": "ContractPen",
        "image": "img/contractpen-logo-sm.png",
        "infoLink": "https://contractpen.com",
        "pinned": true
      },
      {
        "caption": 'REIV SmartVicForms',
        "image": 'https://smartvicforms.com.au/assets/Logo/reiv-smartVicforms%20logo-Full%20Colour.svg',
        "infoLink": 'https://smartvicforms.com.au',
        "pinned": true,
      },
      {
        "caption": 'beNEXT',
        "image": 'https://smartvicforms.com.au/assets/Logo/beNext_orange-darkgreen-logo.svg',
        "infoLink": 'https://www.benext.io',
        "pinned": true,
      },
    ],
    "markdownPlugins": [
      null
    ],
    "repoUrl": "https://github.com/accordproject/cicero"
  },
  "onBrokenLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "debug": true,
        "docs": {
          "homePageId": "accordproject",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "remarkPlugins": [
            [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],
          ],
          "sidebarPath": require.resolve("./sidebars.json")
        },
        "blog": {
          "path": "blog"
        },
        "pages": {
          "remarkPlugins": [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        "theme": {
          "customCss": [require.resolve("./static/css/main.css")]
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-client-redirects",
      {
        "fromExtensions": [
          "html"
        ]
      }
    ]
  ],
  "themeConfig": {
    "hideableSidebar": true,
    "colorMode": {
      "defaultMode": 'light',
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
    },
    "prism": {
      "theme": require('prism-react-renderer/themes/github'),
      "darkTheme": require('prism-react-renderer/themes/dracula'),
    },
    "navbar": {
      "title": "Accord Project",
      "logo": {
        "alt": 'Accord Project Logo',
        "src": 'img/accord_icon.png',
        "srcDark": 'img/A-MARK-ACCORDPROJECT-ONELINE-white.svg',
      },
      "items": [
        {
          "label": "Version",
          "to": "docs",
          "position": "left",
          "items": [
            {
              "label": "0.21",
              "to": "docs/",
              "activeBaseRegex": "docs/(?!0.12|0.13|0.20|0.21|next)"
            },
            {
              "label": "0.20",
              "to": "docs/0.20/"
            },
            {
              "label": "0.13",
              "to": "docs/0.13/"
            },
            {
              "label": "0.12",
              "to": "docs/0.12/"
            },
          ]
        },
        {
          "to": "docs/",
          "label": "Documentation",
          "position": "right"
        },
        {
          "href": "https://studio.accordproject.org",
          "label": "Try Online!",
          "position": "right"
        },
        {
          "href": "https://github.com/accordproject",
          "label": "GitHub",
          "position": "right"
        },
      ],
    },
    "image": "img/docusaurus.png",
    footer: {
      "style": 'dark',
      "copyright": 'Copyright © 2018-' + new Date().getFullYear() + ' Accord Project, LLC.',
      "logo": {
        "alt": 'Accord Project Logo',
        "src": 'img/accord_icon_white.png',
        "href": 'https://accordproject.org"',
      },
      links: [
        {
          // Label of the section of these links
          title: 'Docs',
          items: [
            {
              // Label of the link
              label: 'Overview',
              to: '/docs/accordproject.html',
            },
            {
              label: 'Getting Started',
              to: 'docs/started-installation.html',
            },
            {
              label: 'Template Guides',
              to:'https://docs.accordproject.org/docs/markup-cicero.html'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'User Showcase',
              href: 'https://docs.accordproject.org/users.html',
            },
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/questions/tagged/cicero',
            },
            {
              label: 'Slack',
              href: 'https://accord-project-slack-signup.herokuapp.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/accordhq'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/@accordhq',
            },
            {
              label: 'Vimeo',
              href: 'https://vimeo.com/accordproject',
            },
            {
              label: 'Github',
              href: 'https://github.com/accordproject',
            },
            {
              //Renders the html pass-through instead of a simple link
              html: `
                <style type="text/css">body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.btn{color:#24292e;background-color:#eff3f6;border-color:#c5c9cc;border-color:rgba(27,31,35,.2);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5')}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-position:-0.5em;border-color:#9fa4a9;border-color:rgba(27,31,35,.35);background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0')}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;border-color:#a1a4a8;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);background-image:none;filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}</style>
                <div class="widget"><a class="btn" href="https://github.com/accordproject/cicero" rel="noopener" target="_blank" aria-label="Star this project on GitHub"><svg viewBox="0 0 16 16" width="14" height="14" class="octicon octicon-star" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg> <span> Star </span></a><a class="social-count" href="https://github.com/accordproject/cicero/stargazers" rel="noopener" target="_blank" aria-label="165 stargazers on GitHub">165</a></div>
              `,
            },
          ],
        },
      ],
    },
    "algolia": {
      "apiKey": "1679802ddfc315329d6b5f4616b30e51",
      "indexName": "accordproject_api",
      "algoliaOptions": {}
    }
  }
}