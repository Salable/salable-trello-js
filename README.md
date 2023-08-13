![image](https://github.com/Salable/salable-trello-js/assets/8593744/c84cc85b-af89-4b52-9a5d-3e2cc46a8d6a)

## What am I looking at?

You're looking at the easiest way to build and monetise a Trello power-up (with
the help of the [Salable](https://salable.app)).

## How does it work?

<!-- Possibly add image of "Delete Card" default power-up functionality? -->

Contained in this repository is a fairly standard "Delete Card" Trello power-up.
As it sounds, it allows you to delete individual cards by clicking a button in
the card modal. However, this action is locked behind a "Pro" license. The user
can acquire a license when the plugin is first enabled which will allow them to
perform this action.

This is all configurable so you can build whatever power-up you're thinking of
and monetise it however you would like.

## How do I get started?

### Run locally

1. Clone this repository.
1. Replace the API key on line 20 of `js/client.js` with your Salable API key.
1. Add your Salable API key and product UUID to the `pricing.html` config.
1. Add your Trello API key to the `script` in `index.html`.
1. Build and monetise your idea!

### Get started with Codespaces.

1. Fork this repo.
1. Add the following variables to your Secrets for the repository you just made:

- TRELLO_API_KEY
- SALABLE_API_KEY
- SALABLE_PRODUCT_UUID

1. Start the Codespace!
