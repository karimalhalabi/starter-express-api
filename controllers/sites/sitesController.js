import path from 'path'

const __dirname = process.cwd()

export const serveAminaSite = async (req, res) => {
    const siteMessge = {message:'Amina site is not available !'}
    try {
       res.sendFile(path.join(__dirname+"/sites/amina", "index.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}

export const serveZSite = async (req, res) => {
    const siteMessge = {message:'Z site is not available !'}
    try {
       res.sendFile(path.join(__dirname+"/sites/zSite", "index.html"));
    } catch (error) {
        res.json(siteMessge)
    }
}
