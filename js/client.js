console.log('Salable Trello JS loaded...')

fetch('/js/constants.json')
  .then((resp) => {
    return resp.json()
  })
  .then((respJson) => {
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
          text: 'Delete',
          callback: async (t) => {
            const context = t.getContext()
            const response = await fetch(
              `https://api.salable.app/licenses/granteeId/${context.member}`,
              {
                headers: {
                  'x-api-key': respJson['salableApiKey'],
                },
              },
            )
            const licenses = await response.json()
            const hasALicense = licenses.some((license) =>
              license.capabilities.some(
                (capability) => capability.name === 'Delete',
              ),
            )

            if (!hasALicense) {
              return t.alert({
                message: 'You need a pro license to delete a card!',
              })
            }

            Trello.authorize({
              type: 'popup',
              name: 'Salable Trello JS',
              scope: {
                read: 'true',
                write: 'true',
              },
              expiration: 'never',
            })

            t.hideCard()

            Trello.delete(`cards/${context.card}`, {}, null, () => {
              t.alert({
                message: 'Failed to delete card, please try again...',
              })
            })
          },
        },
      ],
    })
  })
