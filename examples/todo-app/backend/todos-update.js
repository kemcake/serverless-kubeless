'use strict';

const _ = require('lodash');
const mongodb = require('mongodb');
const uuid = require('uuid');

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://mongodb:27017/todo_app';

module.exports = {
  update: (req, res) => new Promise((resolve, reject) => {
    res.header('Access-Control-Allow-Origin', '*');
    const body = [];
    req.on('data', (d) => body.push(d));
    req.on('end', () => {
      const data = JSON.parse(Buffer.concat(body));
      MongoClient.connect(url, (err, db) => {
        if (err) {
          reject(err);
        } else {
          db.collection('todos', (errC, doc) => {
            if (errC) {
              reject(errC);
            } else {
              doc.find().toArray((ferr, docEntries) => {
                if (ferr) {
                  reject(ferr);
                } else {
                  const entry = _.find(docEntries, e => e.id === data.id);
                  const newEntry = _.cloneDeep(entry);
                  _.assign(newEntry, data, { id: uuid.v1(), updatedAt: new Date().getTime() });
                  doc.updateOne(entry, { $set: newEntry }, (uerr) => {
                    if (uerr) {
                      reject(uerr);
                    } else {
                      res.end(JSON.stringify(newEntry));
                      db.close();
                      resolve();
                    }
                  });
                }
              });
            }
          });
        }
      });
    });
  }),
};
