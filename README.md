<!-- Awaiting banner image to slot in here. -->

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

1. Create a Power-Up on the [Trello Power-Up Admin](https://trello.com/power-ups/admin)
1. [Create a Salable account](https://salable.app/signup) if you don't already have one.
1. [Create an API key](https://salable.app/settings/api-keys).
1. Clone this repository.
1. Replace the API key on line 20 of `js/client.js` with your Salable API key.
1. Add your Salable API key and product UUID to the `pricing.html` config.
1. Add your Trello API key to the `script` in `index.html`.
1. Build and monetise your idea!

On the Salable dashboard side you will need to do the following:

1. Create a new product. You can call this whatever you want.
1. Add a `Delete` capability to the product you just created.
1. Create a plan, priced however you like, that gives the user the `Delete` capability you created in the previous step.
