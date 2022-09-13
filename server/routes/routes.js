import * as express from 'express';
import chirpStore from ('../chirpstore');

const router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps())
    };
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    res.json(chirpStore.UpdateChirp(req.params.id, req.body));
});

router.delete('/:id?', (req, res) => {
    res.json(chirpStore.DeleteChirp(req.params.id));
});

export default router;