import vendors from "../model/vendor.js"

export const addVendor = async (req, res, next) => {
    try {
        const isExist = await vendors.findOne({ vendor_name: req.body.vendor_name })
        if (isExist) {
            res.status(200).json({ msg: 'Vendor Already Exist...' })
        } else {
            const result = await vendors(req.body).save()
            res.status(200).json({ msg: 'Vendor added successfully...' })
        }
    } catch (error) {

    }
}

export const getVendor = async (req, res, next) => {
    try {
        const result = await vendors.find()
        res.status(200).json(result)
    } catch (error) {

    }
}
export const updateVendor = async (req, res, next) => {
    try {
        const result = await vendors.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        res.status(200).json({ msg: 'Vendor Updated...' })
    } catch (error) {

    }
}
export const deleteVendor = async (req, res, next) => {
    try {
        const result = await vendors.findByIdAndDelete({ _id: req.params.id }, req.body)
        res.status(200).json({ mag: "Vendor Deleted Successfully..." })
    } catch (error) {

    }
}