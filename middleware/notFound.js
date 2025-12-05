const notFound = (req, res, next) => {
    res.status(404).json({
        status: "fail",
        message: "Rotta non trovata",
    });
};

export default notFound