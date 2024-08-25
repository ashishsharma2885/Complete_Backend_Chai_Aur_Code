import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req, res) => {
    res.status(2000).json({
        message: "ok"
    })
})


export {registerUser}