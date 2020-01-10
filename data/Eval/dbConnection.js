const dbConnection = function (callback) {
  MongoClient.connect(url, function (err, client) {
    if (err) {
      return
    }
    const db = client.db(dbName);
    callback(db);
    client.close();
  });
}
