![Trello For Salable](https://github.com/Salable/salable-trello-js/assets/8593744/2ec31aea-13fa-4c6e-aca6-cd2d6330dd9d)


## What am I looking at?

You're looking at the easiest way to build and monetise a Trello power-up (with
the help of the [Salable](https://salable.app)).

To best utilise this boilerplate, you should have some experience with the
basics of
[Trello Power-Up development](https://developer.atlassian.com/cloud/trello/).

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

1. Create a Power-Up on the
   [Trello Power-Up Admin](https://trello.com/power-ups/admin)
1. [Create a Salable account](https://salable.app/signup) if you don't already
   have one.
1. [Create an API key](https://salable.app/settings/api-keys).
1. Clone this repository.
1. Replace the API key on line 20 of `js/client.js` with your Salable API key.
1. Add your Salable API key and product UUID to the `pricing.html` config.
1. Add your Trello API key to the `script` in `index.html`.
1. Build and monetise your idea!

On the Salable dashboard side you will need to do the following:

1. Create a new product. You can call this whatever you want.
1. Add a `Delete` capability to the product you just created.
1. Create a plan, priced however you like, that gives the user the `Delete`
   capability you created in the previous step.

## Developing locally

Developing the power-up on your local machine is often much easier than
repeatedly deploying to some hosted environment such as GitHub Pages or Netlify.

This can be done easily with tooling such as
[localtunnel](https://localtunnel.me)!

1. Install `localtunnel`
1. Run `npm run dev` to start the template server
1. Start `localtunnel`, specifying the same port: `lt --port 8080`
1. Visit the URL provided to you by `localtunnel` in your browser of choice.
1. Get your remote public IP and paste it into the input on your `localtunnel`
   site. (`curl ipv4.icanhazip.com` is a simple way to get your current IP)
1. Update the power-up URL and your "Allowed Origins" on the
   [Power-Up Admin Portal](https://trello.com/power-ups/admin) to include your
   new `localtunnel` address.
1. Start developing!
