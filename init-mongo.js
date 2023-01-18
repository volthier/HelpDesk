db.createUser(
    {
        user: "mon",
        pwd: "mon",
        roles: [
            {
                role: "readWrite",
                db: "helpdesk"
            }
        ]
    }
)