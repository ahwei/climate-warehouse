import supertest from 'supertest';
import chai from 'chai';
const { expect } = chai;

import app from '../../src/server';
import newUnit from '../test-data/new-unit.json';
import { UnitMirror, Unit } from '../../src/models';

export const createNewUnit = async (payload = newUnit) => {
  const result = await supertest(app).post('/v1/units').send(payload);

  expect(result.body).to.deep.equal({
    message: 'Unit staged successfully',
  });
  expect(result.statusCode).to.equal(200);

  return payload;
};

export const deleteUnit = async (warehouseUnitId) => {
  const result = await supertest(app)
    .delete('/v1/units')
    .send({ warehouseUnitId });
  expect(result.body).to.deep.equal({
    message: 'Unit deleted successfully',
  });
  expect(result.statusCode).to.equal(200);
  return result;
};

export const getUnit = async (warehouseUnitId) => {
  const result = await supertest(app)
    .get('/v1/units')
    .query({ warehouseUnitId });
  expect(result.body).to.be.an('object');
  expect(result.body.warehouseUnitId).to.equal(warehouseUnitId);
  expect(result.statusCode).to.equal(200);
  return result.body;
};

export const checkUnitRecordExists = async (warehouseUnitId) => {
  const record = await Unit.findByPk(warehouseUnitId);
  expect(record).to.be.ok;
};

export const checkUnitRecordDoesNotExist = async (warehouseUnitId) => {
  const record = await Unit.findByPk(warehouseUnitId);
  expect(record).to.not.be.ok;
};

export const checkUnitMirrorRecordExists = async (warehouseUnitId) => {
  const mirrorRecord = await UnitMirror.findByPk(warehouseUnitId);
  expect(mirrorRecord).to.be.ok;
};

export const checkUnitMirrorRecordDoesNotExist = async (warehouseUnitId) => {
  const mirrorRecord = await UnitMirror.findByPk(warehouseUnitId);
  expect(mirrorRecord).to.not.be.ok;
};
