import { db } from "../db.js";

export const getUsers = (req, res) => { 
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, results) => {
        if (err) return res.json({ error: err.message });
        return res.status(200).json(results);
    });

};

