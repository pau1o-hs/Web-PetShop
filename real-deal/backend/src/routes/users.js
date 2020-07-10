const { Router } = require('express');
const db = require('../database');

const router = Router();

// ● If the username has no spaces or upper case characters and if it is greater than 5
// characters and smaller than 9.
// ● If the email is properly formatted(<something>@<something>​).
// ● If the password is, at least, bigger than 8 characters and has no spaces.
// ● If the address has, at least, 10 characters.

router.get('/:username', (req, res) => {
  const { username } = req.params;

  if (!(username in db)) {
    // not found
    res.status(404).send({
      username,
      errorMessage: 'username does not exist in database.',
    });
  } else {
    res.status(200).send({
      username,
      ...db[username],
    });
  }
});

router.post('/', (req, res) => {
  const info = req.body;

  if (info.username in db) {
    // value already exists
    res.status(409).send({
      info,
      errorMessage:
        'an entry already exists with the specified username. Try another.',
    });
  } else {
    const { username } = info;
    delete info.username;

    db[username] = info;

    res.status(201).send({
      username,
      ...info,
    });
  }
});

router.delete('/:username', (req, res) => {
  const { username } = req.params;

  if (!(username in db)) {
    // not found
    res.status(404).send({
      username,
      errorMessage: 'username does not exist in database.',
    });
  } else {
    const userInfo = db[username];
    delete db[username];

    res.status(200).send({
      username,
      ...userInfo,
    });
  }
});

exports = router;
