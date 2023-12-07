![Trello for Salable](https://github.com/Salable/salable-trello-js/assets/8593744/c714573e-823a-4ea8-8381-6b9411107969)

## What am I looking at?

You're looking at the easiest way to build and monetise a Trello power-up (with
the help of the [Salable](https://salable.app)).

To best utilise this boilerplate, you should have some experience with the
basics of
[Trello Power-Up development](https://developer.atlassian.com/cloud/trello/).

## How does it work?

Contained in this repository is a boilerplate Trello Power-Up that gives users
with the `See Message` capability, the ability to click a button on a card and
see a message. This functionality is intentionally basic so as to best show the
core flow of working with Salable, whilst not overcomplicating the example with
Trello specifics.

This is all configurable so you can build whatever power-up you're thinking of
and monetise it however you would like.

## How do I get started?

1. Create a Power-Up on the
   [Trello Power-Up Admin](https://trello.com/power-ups/admin). Use either a
   hosted or development URL for the iframe connector. See
   [Developing Locally](#developing-locally) for instructions.
1. Make sure to add the `card-buttons` and `on-enable` capabilities to your new
   Power-Up.
1. [Create a Salable account](https://salable.app/signup) if you don't already
   have one.
1. [Create a Salable API key](https://salable.app/settings/api-keys).
1. Create a new product on Salable. You can call this whatever you want.
1. Add a `See Message` capability to the product you just created.
1. Create a plan, priced however you like, that gives the user the `See Message`
   capability you created in the previous step.
1. Clone this repository.
1. Add your Salable API Key and product UUID on lines 18/19 of `js/client.js`.
1. Add your Salable API key and product UUID to the `pricing.html` config.
1. Add your Trello API key to the `script` in `index.html`.
1. Ensure you have added your new Power-Up to your Trello board.
1. Build and monetise your idea!

If you'd prefer a more in-depth introduction, refer to our
[Creating and Monetising a Trello Power-Up Using Salable guide](https://docs.salable.app/guides/tutorials-and-guides/trello/creating-monetising-trello-power-using-salable/).

## Developing locally

Developing the power-up on your local machine is often much easier than
repeatedly deploying to some hosted environment such as GitHub Pages or Netlify.

This can be done easily with tooling such as
[localtunnel](https://localtunnel.me) or a paid Ngrok account!

1. Install `localtunnel`.
1. Run `npm install`.
1. Run `npm run dev` to start the template server.
1. Start `localtunnel`, specifying the same port: `lt --port 8080`.
1. Visit the URL provided to you by `localtunnel` in your browser of choice.
1. Get your remote public IP and paste it into the input on your `localtunnel`
   site. (`curl ipv4.icanhazip.com` is a simple way to get your current IP)
1. Update the power-up URL and your "Allowed Origins" on the
   [Power-Up Admin Portal](https://trello.com/power-ups/admin) to include your
   new `localtunnel` address.
1. Start developing!
