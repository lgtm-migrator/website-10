## Meteor Community Website

[![Crowdin](https://badges.crowdin.net/meteor-community-website/localized.svg)](https://crowdin.com/project/meteor-community-website)

Read in the tutorial home page where you should ask questions (spoiler: [Forums](https://forums.meteor.com) or [Slack](https://join.slack.com/t/meteor-community/shared_invite/enQtODA0NTU2Nzk5MTA3LWY5NGMxMWRjZDgzYWMyMTEyYTQ3MTcwZmU2YjM5MTY3MjJkZjQ0NWRjOGZlYmIxZjFlYTA5Mjg4OTk3ODRiOTc)).

This is a [hexo](https://hexo.io) static site used to generate the [Meteor React Tutorial Docs](https://react-tutorial.meteor.com).

## Contributing

We'd love your contributions! Please send us Pull Requests or open issues on [github](https://github.com/meteor/react-tutorial). Also, read the [contribution guidelines](https://github.com/meteor/docs/blob/master/Contributing.md).

If you are making a larger contribution, you may need to run the site locally:

### Running locally

- Install [nvm](https://github.com/nvm-sh/nvm) to manage your Node.js (yes, this is a hexo project and not Meteor, in Meteor you don't need to worry about Node.js versions at all)

  `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
- Install Node.js 14.16.0:

  `nvm install 14.16.0`
  
- Install the project

  `npm install`

- Run it

  `npm start`
  
### Styles and Lint

Make sure your changes are not breaking styles and lint rules, in the root project, run:

  - `npm install`
  - `npm run quave-check`
  
`quave-check` should not return any error or warning. If it does you need to fix them before sending a PR.

If you get an error because some npm modules are not resolved (`import/no-unresolved`) you need to run `npm install` inside the Meteor project that is throwing this error so you generate the `node_modules` folder for it.

We have a git hook to prevent commits that are not passing these rules but it's good to double-check as maybe your hooks set up can be messed up.
  
### Making a Pull Request

- Create a fork and make your changes on it.

- Test your changes and make sure you sync your code changes (`src` folder) with your text changes (`tutorial` folder).

- Build your changes:

`npm run build`

- Create your Pull Request against `master` branch.

- Sign the CLA.

- Wait for feedback or approval.

#### Translations

Translating the website into different language can be done via [our Crowdin project](https://crowdin.com/project/meteor-community-website).

It is important to make sure that in every header the `lang` property is set to the locale that is being translated for the translation to work properly. The original is `lang: en`, so for Czech it would be `lang: cs-CZ`, for Japanese: `lang: ja-JP` and so on.
