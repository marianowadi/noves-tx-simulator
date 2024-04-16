export const API_URL = 'https://simulator-backend.dev.noves.fi/simulate'

export const API_RESPONSE = {
  rawTx: {
    type: 'CALL',
    from: '0x0000000000000000000000000000000000000000',
    to: '0x6bd22a8a88690465879997bd965bba5354b77e03',
    gas: 0,
    gasPrice: null,
    value: 0,
    input: '0x'
  },
  rawTraces: [],
  txReceipt: {
    status: 1,
    gas: 600000000,
    gasUsed: 21000,
    logs: [
      {
        logIndex: 1,
        address: '0x388c818ca8b9251b393131c08a736a67ccb19297',
        data: '0x0000000000000000000000000000000000000000000000000000000000000000',
        topics: [
          '0x27f12abfe35860a9a927b465bb3d4a9c23c8428174b83f278fe45ed7b4da2662'
        ]
      },
      {
        logIndex: 2,
        address: '0x388c818ca8b9251b393131c08a736a67ccb19297',
        data: '0x0000000000000000000000000000000000000000000000000000000000000000',
        topics: [
          '0x27f12abfe35860a9a927b465bb3d4a9c23c8428174b83f278fe45ed7b4da2662'
        ]
      },
      {
        logIndex: 3,
        address: '0x388c818ca8b9251b393131c08a736a67ccb19297',
        data: '0x0000000000000000000000000000000000000000000000000000000000000000',
        topics: [
          '0x27f12abfe35860a9a927b465bb3d4a9c23c8428174b83f278fe45ed7b4da2662'
        ]
      },
      {
        logIndex: 4,
        address: '0x388c818ca8b9251b393131c08a736a67ccb19297',
        data: '0x0000000000000000000000000000000000000000000000000000000000000000',
        topics: [
          '0x27f12abfe35860a9a927b465bb3d4a9c23c8428174b83f278fe45ed7b4da2662'
        ]
      }
    ]
  }
}
