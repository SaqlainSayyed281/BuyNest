 const User = require("../models/apischema")
const info = require("../utlis/data")

exports.Health = async (req, res) => {
  try {
    const inform = info(req.body)

    // validation
    if (!inform.name || !inform.description) {
      return res.status(400).json({
        message: "name and description field required"
      })
    }

    // db create
    const apiDoc = await User.create({
      ...inform
    })

    // response
    return res.status(201).json({
      message: "API created and saved in database",
      name: apiDoc.name,
      description: apiDoc.description
    })

  } catch (err) {
    console.error(err)
    return res.status(500).json({
      message: "Internal server error"
    })
  }
}