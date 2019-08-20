import sinon from 'sinon'
import awaitTimeout from '@/index'


describe('await-timeout', function test() {

  beforeEach(function () {
    this.clock = sinon.useFakeTimers()
  })

  afterEach(function () {
    this.clock.restore()
  })

  it('should return promise and resolve after time over', async function test() {
    this.timeout(400)
    let result = false
    const promise = awaitTimeout(1000)
    expect(result).to.equal(false)
    this.clock.tick(1500)
    await promise
    result = true
    expect(result).to.equal(true)
  })

  it('should run callback', async function test() {
    this.timeout(400)
    let result = false
    const promise = awaitTimeout(1000, () => (result = true))
    expect(result).to.equal(false)
    this.clock.tick(1500)
    await promise
    expect(result).to.equal(true)
  })

  it('should run callback with payload', async function test() {
    this.timeout(400)
    let result = false
    const promise = awaitTimeout(1000, (payload) => (result = payload), [true])
    expect(result).to.equal(false)
    this.clock.tick(1500)
    await promise
    expect(result).to.equal(true)
  })
})
