import * as arbor from '../src'

it('hello world', async () => {
  const service = 'leveldb-transparency-service'
  const log = arbor.Log.create(service)
  expect(log.service_id).toBe(service)
});
