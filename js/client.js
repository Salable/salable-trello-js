console.log('Salable Trello JS loaded...')

TrelloPowerUp.initialize({
  'on-enable': (t, options) => {
    return t.modal({
      url: './pricing.html',
      args: { member: options.context.member },
    })
  },
  'card-buttons': (t, options) => [
    {
      icon: '',
      text: 'Click Me! (Pro)',
      callback: async (t) => {
        const context = t.getContext()
        const response = await fetch(
          `https://api.salable.app/licenses/granteeId/${context.member}`,
          {
            headers: {
              'x-api-key': 'YOUR_API_KEY_HERE',
            },
          },
        )
        const licenses = response.status === 200 ? await response.json() : []
        const hasALicense = licenses.some(
          (license) =>
            license.capabilities.some(
              (capability) => capability.name === 'See Message',
            ) && license.status === 'ACTIVE',
        )

        if (!hasALicense) {
          return t.alert({
            message: 'You need a Pro license to see the message!',
          })
        }

        t.alert({
          message: 'Thank you for being a Pro license holder!',
        })
        Trello.authorize({
          type: 'popup',
          name: 'Salable Trello JS',
          scope: {
            read: 'true',
            write: 'true',
          },
          expiration: 'never',
        })
      },
    },
  ],
})
