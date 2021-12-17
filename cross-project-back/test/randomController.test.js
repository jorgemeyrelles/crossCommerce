const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);


const ctrl = require('../controllers/randomControllers');
const mdw = require('../middlewares/api');

const pages = [0, 1, 10, 5869, 10000, 10001];

describe('Controller tests', () => {
  const res = {};
  const req = {};
  let next;
  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    next = sinon.stub().returns();
  });
  afterEach(() => {
    sinon.reset();
  });
  describe('Random call is working', () => {
    beforeEach(() => {
      req.params = { id: pages[1] };  
    });
    it('Params is valid', async () => {
      const stub = sinon.stub(mdw, 'getApi').resolves(pages[1]);
      await ctrl.newSelected(req, res);
      expect(res.status).to.have.been.calledWith(200);
      stub.restore();
    });
    beforeEach(() => {
      req.params = { id: pages[1] };  
    });
    it('"id" is not null', async () => {
      const stub = sinon.stub(mdw, 'getApi').resolves(pages[1]);
      await ctrl.newSelected(req, res);
      expect(req.params.id).to.be.equal(pages[1]);
      stub.restore();
    });
  });
  describe('Random is not working', () => {
    beforeEach(() => {
      req.params = { id: '' };  
    });
    it('Params is Empty', async () => {
      const stub = sinon.stub(mdw, 'getApi').resolves();
      await ctrl.newSelected(req, res);
      expect(res.status).to.have.been.calledWith(500);
      stub.restore();
      // é necessário criar um validation para parmas sem valor ou vazio
    });
    beforeEach(() => {
      req.params = { id: pages[0] };  
    });
    it('"id" is invalid', async () => {
      const stub = sinon.stub(mdw, 'getApi').resolves();
      await ctrl.newSelected(req, res);
      expect(req.params.id).to.be.equal(pages[0]);
      stub.restore();
      // é necessário criar validation para id invalido
    });
  });
  describe('Random returns empty array', () => {
    beforeEach(() => {
      req.params = { id: pages[5] };  
    });
    it('An array empty is sent', async () => {
      const stub = sinon.stub(mdw, 'getApi').resolves();
      await ctrl.newSelected(req, res);
      expect(res.status).to.have.been.calledWith(200);
      stub.restore();
    });
    beforeEach(() => {
      req.params = { id: pages[5] };  
    });
    it('An array empty is sent', async () => {
      const stub = sinon.stub(mdw, 'getApi').resolves();
      await ctrl.newSelected(req, res);
      expect(res.json).to.have.been.calledWith([]);
      stub.restore();
    });
  });
});
