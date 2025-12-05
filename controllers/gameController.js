import connection from "../db.js";

const index = (req, res) => {
    const {name, completed} = req.query
    const userId = req.user ? req.user.id : null
    if (!userId) {
        return res.status(401).json({ 
            success: false, 
            message: "Id utente non disponibile" 
        }); 
    };

    let sql = 'SELECT id, name, completed FROM games WHERE user_id = ?'
    const params = [userId]

    if (name) {
        sql += ' AND name LIKE ?'
        params.push(`${name}`)
    };

    if (completed !== undefined) {
        const completedValue = (completed === 'true' || completed === '1') ? 1 : 0
        sql += 'AND completed = ?'
        params.push(completedValue)
    };

    connection.query(sql, params, (err, result) => {
        if (err) {
            console.error("Errore durante il recupero dei giochi", err);
            return next(err);
        };

        res.status(200).json({
            success: true,
            count: result.length,
            data: result,
        });
    });
};


const gameController = {
    index
};

export default gameController;