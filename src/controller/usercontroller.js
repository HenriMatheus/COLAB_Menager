const axios = require("axios")
const qs = require("qs")
const queryUsers = require("../models/queryUser.js")

class usersControll {
    async oauth(req, res) {
        const authorizationCode = req.query.code;

        if (!authorizationCode) {
            return res.send("Authorization code not provided.");
        }

        try {
            const tokenResponse = await axios.post(
                process.env.TOKEN_ENDPOINT,
                qs.stringify({
                    grant_type: "authorization_code",
                    code: authorizationCode,
                    redirect_uri: process.env.REDIRECT_URI,
                    client_id: process.env.CLIENT_ID,
                    client_secret: process.env.CLIENT_SECRET,
                }),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )

            req.session.accessToken = tokenResponse.data.access_token;

            res.redirect("/login");
        } catch (error) {
            console.error("Error: ", error)
        }
    }

    async login(req, res) {
        let registration = ""

        try {
            const userInfoResponse = await axios.get(process.env.API_ME_ENDPOINT, {
                headers: {
                    Authorization: `Bearer ${req.session.accessToken}`,
                },
            })
            
            registration = userInfoResponse.data.identificacao
        } catch (error) {
        console.error(`Error: ${error}`)
        }

        if (registration) {
            req.session.use = registration

            queryUsers.getUser(registration)
            .then((data) => {
                if (data.length == 0) {
                    queryUsers.addUser(registration)
                }
            })

            registration.length === 14 ? res.redirect(`/home/${registration}`) : res.redirect("/outstandingLoans")
        } else {
            res.redirect("/")
        }
    }

    async logout(req, res) {
        req.session.destroy()
        res.redirect("/")
    }
}

module.exports = new usersControll()