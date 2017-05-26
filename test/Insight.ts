import { expect } from 'chai'

import { InsightClient } from '../src/InsightClient'
import { ApiMode } from '../src/ApiMode'

const address = '1L8WTdh5GLcsnpUv6wsHUka8anFJTL6Mcd'
const block = 'block'
const txid = '123'

const liveClient = new InsightClient(ApiMode.Live, null)
const testClient = new InsightClient(ApiMode.Test, null)

describe('Client.Transactions URLs', () => {
  it(`byId.url`, () => {
    expect(liveClient.Transactions.byId.url(txid))
      .to.be.equal('https://insight.bitpay.com/api/tx/' + txid)
    expect(testClient.Transactions.byId.url(txid))
      .to.be.equal('https://test-insight.bitpay.com/api/tx/' + txid)
  })
  it(`byBlockOrAddress.url({address})`, () => {
    expect(liveClient.Transactions.byBlockOrAddress.url({address}))
      .to.be.equal('https://insight.bitpay.com/api/txs?address=' + address)
    expect(testClient.Transactions.byBlockOrAddress.url({address}))
      .to.be.equal('https://test-insight.bitpay.com/api/txs?address=' + address)
  })
  it(`byBlockOrAddress.url({block})`, () => {
    expect(liveClient.Transactions.byBlockOrAddress.url({block}))
      .to.be.equal('https://insight.bitpay.com/api/txs?block=' + block)
    expect(testClient.Transactions.byBlockOrAddress.url({block}))
      .to.be.equal('https://test-insight.bitpay.com/api/txs?block=' + block)
  })
  it(`rawById.url`, () => {
    expect(liveClient.Transactions.rawById.url(txid))
      .to.be.equal('https://insight.bitpay.com/api/rawtx/' + txid)
    expect(testClient.Transactions.rawById.url(txid))
      .to.be.equal('https://test-insight.bitpay.com/api/rawtx/' + txid)
  })
  it(`rawById.url`, () => {
    expect(liveClient.Transactions.send.url())
      .to.be.equal('https://insight.bitpay.com/api/tx/send')
    expect(testClient.Transactions.send.url())
      .to.be.equal('https://test-insight.bitpay.com/api/tx/send')
  })
})

describe('Client.Transactions.fetch', () => {
  const mockFetch = (url: any, params: any) => {
    return Promise.resolve({
      json: () => Promise.resolve({
        url, params
      })
    })
  }

  const mockClient = new InsightClient(ApiMode.Live, mockFetch)

  it('send.post', async function() {
    const transaction = await mockClient.Transactions.send.post('rawtxhex')
    expect(transaction).to.be.deep.equal({
      url: 'https://insight.bitpay.com/api/tx/send',
      params: {
        method: 'POST',
        body: '{"rawtx":"rawtxhex"}',
        headers: { 'content-type': 'application/json' }
      }
    })
  })
})