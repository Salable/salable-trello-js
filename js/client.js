import { getUser } from 'https://www.unpkg.com/@salable/js@1.0.0/dist/index.js'
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
        const { hasCapability } = await getUser({
          productUuid: 'YOUR_PRODUCT_UUID',
          apiKey: 'YOUR_API_KEY',
          granteeId: context.member,
        })

        if (!hasCapability('See Message')) {
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
