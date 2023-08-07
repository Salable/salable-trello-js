console.log('Salable Trello JS loaded...')

TrelloPowerUp.initialize({
  'card-buttons': (t, options) => [
    {
      icon: '',
      text: 'Delete',
      callback: (t) => {
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

        const context = t.getContext()
        Trello.delete(`cards/${context.card}`, {}, null, () => {
          t.alert({
            message: 'Failed to delete card, please try again...',
          })
        })
      },
    },
  ],
})
