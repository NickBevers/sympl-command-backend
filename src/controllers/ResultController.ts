import Result from "../models/Result";
import { NextFunction, RequestHandler, Request, Response } from "express";

const getResults = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.q || req.query.q === "") {
        return res.status(400).json({
            message: "No search query provided.",
        });
    } else {
        try {
            // Result.collection.createIndex({
            //     firstName: "text",
            //     lastName: "text",
            //     email: "text",
            //     title: "text",
            //     description: "text",
            //     owner: "text",
            //     fileName: "text",
            //     folder: "text",
            //     createdBy: "text",
            // });
    
            // search for all fields in the collection with a regex containing the query
            await Result.find({
                $or: [
                    { firstName: { $regex: req.query.q?.toString(), $options: "i" } },
                    { lastName: { $regex: req.query.q?.toString(), $options: "i" } },
                    { email: { $regex: req.query.q?.toString(), $options: "i" } },
                    { title: { $regex: req.query.q?.toString(), $options: "i" } },
                    { description: { $regex: req.query.q?.toString(), $options: "i" } },
                    { owner: { $regex: req.query.q?.toString(), $options: "i" } },
                    { fileName: { $regex: req.query.q?.toString(), $options: "i" } },
                    { folder: { $regex: req.query.q?.toString(), $options: "i" } },
                    { createdBy: { $regex: req.query.q?.toString(), $options: "i" } },
                ],
            }, { _id: 0, __v: 0 }).sort({ $natural: 1 })
                .then((data) => {
                    return res.status(200).json({
                        message: "Search results found.",
                        results: data,
                    });
                })
                .catch((err) => {
                    console.log("error: " + err);
                });
        } catch (err) {
            console.log("error: " + err);
        }   
    }
};

// const seedResults: RequestHandler = async (req, res, next) => {
//     console.log("seeding results");
//     return res.json({ message: "seeding results" });
// const results = [
//     {
//         type: "user",
//         firstName: "Frankie",
//         lastName: "Sullivan",
//         lastLogin: new Date(),
//         email: "frankie.sullivan@sympl.be",
//     },
//     {
//         type: "user",
//         firstName: "John",
//         lastName: "Doe",
//         lastLogin: new Date(),
//         email: "john.doe@sympl.be"
//     },
//     {
//         type: "project",
//         title: "Sympl",
//         description: "Sympl is a recruitment management tool.",
//         owner: "Frankie Sullivan",
//         createdAt: new Date(),
//     },
//     {
//         type: "project",
//         title: "Sympl_website",
//         description: "Sympl's website.",
//         owner: "John Doe",
//         createdAt: new Date("2020-10-21T14:02:25.000Z"),
//     },
//     {
//         type: "file",
//         fileName: "Sympl Logo",
//         fileType: "png",
//         folder: "Sympl_branding",
//         createdBy: "Frankie Sullivan",
//     },
//     {
//         type: "file",
//         fileName: "Verslag vergadering 28/11",
//         fileType: "pdf",
//         folder: "Meetings",
//         createdBy: "Frankie Sullivan",
//     },
//     {
//         type: "file",
//         fileName: "marketing_results_export",
//         fileType: "csv",
//         folder: "Marketing",
//         createdBy: "John Doe",
//     },
//     {
//         type: "file",
//         fileName: "closing_presentation_2020",
//         fileType: "pdf",
//         folder: "Marketing",
//         createdBy: "Frankie Sullivan",
//     },
//     {
//         type: "file",
//         fileName: "new_hires",
//         fileType: "xlsx",
//         folder: "HR",
//         createdBy: "John Doe",
//     },
// ];

// try {
//     // const seedItems = await Result.insertMany(results);
//     // return res.json(seedItems);
//     // Result.insertMany(results);
//     await Result.insertMany(results);
// } catch (err) {
//     res.json({ message: err });
// }
// }

export default { getResults };
