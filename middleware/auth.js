function checkRole(allowedRoles) {
    return (req, res, next) => {
        const userRole = req.headers.role;

        if (!userRole) {
            return res.status(401).json({ error: "Role not provided" });
        }

        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ error: "Access denied" });
        }

        next();
    };
}

module.exports = checkRole;