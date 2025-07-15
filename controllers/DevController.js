/**
 * Get all developers
 * @param {*} req 
 * @param {*} res 
 */
export const getAllDevs = (req,res)=>{
    res.status(200).json({message : "Hello from this route dev", name : "Akash das"});
}


/**
 * Create a new developer
 * @param {*} req 
 * @param {*} res 
 */

export const createDev = (req,res)=>{
    res.status(202).json(req.body);
}